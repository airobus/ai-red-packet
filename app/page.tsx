'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AI_CONFIG, PROMPT_TEMPLATES } from './config';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [processedImage, setProcessedImage] = useState('');

  const handleTemplateClick = (template: typeof PROMPT_TEMPLATES[0]) => {
    setPrompt(template.prompt);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setProcessedImage('');

    try {
      const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...AI_CONFIG,
          prompt,
          negative_prompt: '',
        }),
      };

      const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, options);
      const data = await response.json();

      if (!data.images?.[0]?.url) {
        throw new Error('Failed to generate image');
      }

      const processResponse = await fetch('/api/process-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: data.images[0].url,
        }),
      });

      const processData = await processResponse.json();
      if (processData.success) {
        setProcessedImage(processData.image);
      } else {
        throw new Error(processData.error || 'Failed to process image');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'wechat-red-packet.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-6xl font-bold text-red-600 group">
            <span className="inline-block transition-transform duration-200 
              group-hover:scale-110"
            >
              新年快乐，龙年大吉🐲
            </span>
          </h1>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-red-700">快速选择模板：</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PROMPT_TEMPLATES.map((template) => (
              <button
                key={template.title}
                onClick={() => handleTemplateClick(template)}
                className="p-2 text-sm border-2 border-red-200 rounded-md hover:bg-red-50 
                  transition-colors text-red-600 hover:border-red-400"
              >
                {template.title}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-lg border border-red-200
            focus-within:border-red-500 transition-colors">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 px-4 py-2.5
                outline-none focus:font-medium focus:text-red-600
                border-0
                placeholder-gray-400 text-gray-700
                overflow-x-auto whitespace-nowrap scrollbar-none
                focus:ring-0"
              placeholder="输入红包封面描述"
              style={{
                WebkitOverflowScrolling: 'touch',
                outline: 'none'
              }}
            />
            
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className={`shrink-0
                px-8 py-2.5 rounded-lg text-base font-medium text-white transition-colors
                ${isLoading || !prompt.trim() 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  生成中
                </span>
              ) : '生成封面'}
            </button>
          </div>
        </form>

        {error && (
          <div className="p-4 text-red-600 bg-red-50 rounded-md text-center">
            {error}
          </div>
        )}

        {processedImage && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">生成的红包封面：</h2>
            <div className="border rounded-lg p-4 bg-gray-50 overflow-auto">
              <div className="relative w-[280px] h-[475px] mx-auto">
                <Image
                  src={processedImage}
                  alt="Generated red packet cover"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              下载红包封面
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
