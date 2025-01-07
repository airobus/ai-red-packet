import { NextResponse } from 'next/server';
import sharp from 'sharp';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const { imageUrl } = await request.json();

    // 下载原始图片
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 获取底部图片路径
    const bottomImagePath = join(process.cwd(), 'public', 'red-p.png');

    // 处理主图片 - 调整为完整尺寸
    const processedImage = await sharp(buffer)
      .resize({
        width: 957,
        height: 1278,
        fit: 'cover',
        position: 'center'
      })
      .ensureAlpha()
      .png()
      .toBuffer();

    // 直接在主图片上叠加底部图片
    const finalImage = await sharp(processedImage)
      .composite([
        {
          input: bottomImagePath,
          gravity: 'south', // 自动对齐到底部
          blend: 'over'
        }
      ])
      .png()
      .toBuffer();

    // 转换为base64
    const base64Image = finalImage.toString('base64');

    return NextResponse.json({ 
      success: true, 
      image: `data:image/png;base64,${base64Image}` 
    });
  } catch (error) {
    console.error('Image processing error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to process image'
    }, { status: 500 });
  }
} 