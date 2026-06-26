export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  challenges: string[];
  recommendedApps: string[];
  benefits: string[];
}

export interface WorkflowStep {
  step: string;
  app: string;
}

export interface IndustryOutcome {
  title: string;
  desc: string;
}

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryContent {
  tags: string[];
  workflow: WorkflowStep[];
  outcomes: IndustryOutcome[];
  reasons: string[];
  faqs: IndustryFAQ[];
}
