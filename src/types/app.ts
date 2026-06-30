import type { LucideIcon } from 'lucide-react';

export interface AppCategory {
  id: string;
  name: string;
  description: string;
}

export interface AppMetric {
  value: string;
  label: string;
}

export interface AppChallenge {
  title: string;
  description: string;
}

export interface AppWorkflowStep {
  title: string;
  description: string;
}

export interface AppCapability {
  title: string;
  description: string;
}

export interface AppFAQ {
  question: string;
  answer: string;
}

export interface ConnectedModule {
  id: string;
  relationship: string;
  businessValue: string;
}

export interface App {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  badge?: string;
  icon?: LucideIcon;
  features: string[];
  industries: string[];
  isPopular?: boolean;
  
  // Enterprise Module Page Extensions
  businessProblem?: string;
  businessOutcome?: string;
  metrics?: AppMetric[];
  challenges?: AppChallenge[];
  workflow?: AppWorkflowStep[];
  capabilities?: AppCapability[];
  outcomes?: string[];
  faqs?: AppFAQ[];
  connectedModules?: ConnectedModule[];
}
