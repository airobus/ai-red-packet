# AI 红包背景生成器

## 项目简介

这是一个使用 AI 技术生成个性化红包背景的应用。用户可以通过描述或关键词生成独特的红包背景图案。

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Replicate/Stable Diffusion API (用于AI图像生成)
- Cloudinary (用于图片存储和处理)
- Shadcn/ui (UI组件库)

## 核心功能

1. **AI 图像生成**
   - 文本到图像的转换
   - 预设红包主题模板
   - 自定义提示词输入

2. **图像处理**
   - 图像裁剪和调整
   - 红包尺寸预设
   - 图像优化

3. **用户界面**
   - 直观的提示词输入界面
   - 实时预览
   - 图像编辑工具
   - 下载功能

## 项目结构

## 开始使用

1. 安装依赖：
```bash
pnpm install
```

2. 创建 `.env.local` 文件并添加必要的环境变量：
```
NEXT_PUBLIC_API_URL=https://api.siliconflow.cn/v1/images/generations
NEXT_PUBLIC_API_KEY=your_api_key_here
NEXT_PUBLIC_AI_MODEL=black-forest-labs/FLUX.1-pro
```

## 配置说明

可以通过环境变量配置以下参数：

- `NEXT_PUBLIC_API_URL`: AI 图像生成 API 地址
- `NEXT_PUBLIC_API_KEY`: API 密钥
- `NEXT_PUBLIC_AI_MODEL`: 使用的 AI 模型，默认为 'black-forest-labs/FLUX.1-pro'

其他 AI 相关配置可以在 `app/config/index.ts` 中修改。
