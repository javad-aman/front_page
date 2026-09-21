import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    category: 'Programming',
    items: ['Python', 'R', 'SQL', 'Git'],
  },
  {
    category: 'ML & GenAI',
    items: [
      'Supervised & Unsupervised ML',
      'CatBoost',
      'GPBoost',
      'Forecasting',
      'Anomaly Detection',
      'Causal Inference',
      'A/B Testing',
      'TensorFlow',
      'PyTorch',
      'RAG',
      'Agent Workflows (LangChain, LangGraph)',
      'Vector Search (FAISS, Azure AI Search)',
      'OpenAI SDK',
      'LLM Evaluation & Fine-tuning',
      'Hugging Face',
    ],
  },
  {
    category: 'Data & Cloud',
    items: [
      'Snowflake',
      'Azure',
      'AWS (SageMaker, Lambda, Glue, Step Functions)',
      'Azure AI Foundry',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'MLOps',
      'HPC',
    ],
  },
  {
    category: 'Visualization',
    items: ['Power BI', 'Tableau'],
  },
  {
    category: 'Domain',
    items: [
      'Financial Forecasting & Analytics',
      'Manufacturing Analytics',
      'Transportation Engineering',
      'Travel Behavior & Demand Modeling',
      'GPS / Mobility Data',
    ],
  },
]
