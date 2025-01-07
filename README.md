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

4. **精品展示**
   - 展示精选的红包封面图
   - 支持用户查看和下载

5. **赞助支持**
   - 显示项目运营成本
   - 提供赞助二维码以支持项目

## 项目结构

- `app/` - 应用的主要代码
- `public/` - 静态资源（图片等）
- `components/` - 共享组件（如导航栏和页脚）
- `config/` - 配置文件
- `pricing/` - 价格页面
- `featured/` - 精品展示页面

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

## 未来优化点

1. **功能扩展**
   - 增加更多风格的红包模板
   - 提供用户自定义尺寸的选项
   - 支持批量生成红包封面

2. **性能优化**
   - 优化图像加载速度
   - 提高生成图像的质量和速度

3. **用户体验**
   - 增强用户界面的交互性
   - 提供更详细的使用说明和帮助文档

4. **数据分析**
   - 收集用户反馈以改进功能
   - 分析用户使用数据以优化服务
