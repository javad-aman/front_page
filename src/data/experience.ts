import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    company: 'Caterpillar Inc.',
    role: 'Data Scientist II',
    location: 'Dallas, TX',
    start: 'Apr 2023',
    end: 'Present',
    bullets: [
      'Built anomaly-detection and fact-checking systems for finance and manufacturing, combining statistical methods with LLMs (RAG, agent workflows, vector search) to flag irregularities in journal entries and financial statements, eliminating hours of manual analyst review.',
      'Built and evaluated a production RAG pipeline (Azure AI Search, FAISS) with a custom evaluation harness — a golden dataset, RAGAS faithfulness/context-precision scoring, and a human-calibrated LLM judge — surfacing a grounding failure mode and improving output faithfulness.',
      'Drove multimillion-dollar gains in forecast value by developing high-volume, near-real-time revenue and cost-optimization forecasting across business sectors, segments, and regions, combining CatBoost and GPBoost ensembles with causal-effect analysis and A/B testing.',
      'Owned end-to-end data pipelines across Snowflake, Azure, and AWS, writing modular, production-grade Python with Git version control and building MLOps practices — model monitoring, drift detection, CI/CD — from prototype to production.',
      'Designed a 14-category LLM classifier (zero-shot / few-shot) and migrated it from local prototype to enterprise Azure AI Foundry, replacing slow, inconsistent manual pricing-code labeling with a reproducible, incremental pipeline.',
      'Identified key drivers behind sales and cost outcomes through feature-importance and interpretability analysis, delivering decision-support dashboards that showed finance stakeholders exactly what was moving their forecasts.',
      'Mentored interns and junior team members through code review and hands-on pairing on model design and deployment, leading collaborative projects from scoping through delivery.',
    ],
  },
  {
    company: 'Southern Methodist University',
    role: 'Research Assistant',
    location: 'Dallas, TX',
    start: 'Jan 2019',
    end: 'Mar 2023',
    bullets: [
      "Modeled post-COVID mobility shifts by processing multi-terabyte GPS data on SMU's ManeFrame HPC cluster, applying gradient-boosting and clustering to identify significant behavior changes across Dallas-area residents.",
      'Applied NLP and CNNs (TensorFlow/Keras) to 100,000+ tweets and app reviews on micromobility services, translating rider-sentiment findings into recommendations adopted by city-planning partners.',
    ],
  },
  {
    company: 'High Street Consulting',
    role: 'Mobility Data Analyst',
    location: 'Pittsburgh, PA',
    start: 'Jan 2022',
    end: 'May 2022',
    bullets: [
      'Ensured client satisfaction by collaborating with a six-engineer team to scope project requirements, needs, and deadlines throughout delivery.',
      'Developed and validated a Random Forest model for traffic-speed forecasting and built interactive Tableau and Power BI dashboards on 35M+ row federal travel-monitoring datasets, reducing manual data-collection requirements and revealing spatio-temporal traffic patterns.',
    ],
  },
]
