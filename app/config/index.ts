type PromptTemplate = {
  title: string;
  prompt: string;
};

export const AI_CONFIG = {
  model: process.env.NEXT_PUBLIC_AI_MODEL || 'black-forest-labs/FLUX.1-pro',
  imageSize: '896x1152',
  batchSize: 1,
  seed: 4999999999,
  numInferenceSteps: 20,
  guidanceScale: 7.5,
  promptEnhancement: false,
} as const;

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    title: '新年红包',
    prompt: '中国新年场景，红灯笼，烟花，喜庆的氛围，传统建筑，金色和红色为主色调'
  },
  {
    title: '春节团圆',
    prompt: '一家人围坐在餐桌旁，温馨的灯光，热气腾腾的饺子，欢声笑语'
  },
  {
    title: '山水画意',
    prompt: '水墨山水画风格，远山含黛，流水潺潺，亭台楼阁，意境优美'
  },
  {
    title: '现代都市',
    prompt: '现代城市夜景，霓虹灯光，摩天大楼，充满科技感和未来感'
  }
]; 