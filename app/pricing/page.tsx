import Image from 'next/image';

const MONTHLY_COSTS = [
  {
    name: 'AI 模型费用',
    amount: '约 ¥2.5/张',
    // details: '使用 Stable Diffusion XL 模型生成高质量图片'
  },
  {
    name: '服务器费用',
    amount: '¥99/月',
    // details: '阿里云服务器 + CDN'
  },
  {
    name: '域名费用',
    amount: '¥60/年',
    // details: '域名注册和续费'
  }
];

export default function PricingPage() {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* 免费说明 */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600">
            完全免费使用
          </h1>
          <p className="text-lg text-gray-600">
            AI 红包封面生成器目前对所有用户完全免费开放
          </p>
        </div>

        {/* 成本明细 */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">项目运营成本</h2>
            <p className="mt-2 text-gray-600">为了保持服务的稳定运行，我们每月需要支付：</p>
          </div>

          <div className="space-y-4">
            {MONTHLY_COSTS.map((cost) => (
              <div key={cost.name} className="flex items-start justify-between p-4 rounded-lg border border-gray-100 hover:border-red-200 transition-colors">
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-800">{cost.name}</h3>
                  {/* <p className="text-sm text-gray-500">{cost.details}</p> */}
                </div>
                <div className="text-red-600 font-medium">{cost.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 赞助部分 */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              支持我们
            </h2>
            <p className="text-gray-600">
              如果这个工具对您有帮助，欢迎赞助支持我们继续提供免费服务
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <div className="w-48 h-48 relative">
              <Image
                src="/sponsor-qr.jpg"
                alt="赞赏码"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-48 h-48 relative">
              <Image
                src="/add-friend-qr.jpg"   
                alt="添加好友二维码"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            感谢您的支持，这将帮助我们维持服务器运行和功能开发
          </div>
        </div>

        {/* 功能说明 */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              当前功能
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>✨ AI 生成红包封面</li>
              <li>✨ 多种模板选择</li>
              <li>✨ 自定义提示词</li>
              <li>✨ 高清图片下载</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              未来计划
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>🚀 更多风格模板</li>
              <li>🚀 自定义尺寸</li>
              <li>🚀 批量生成</li>
              <li>🚀 图片优化</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 