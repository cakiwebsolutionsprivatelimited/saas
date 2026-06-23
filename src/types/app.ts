export interface AppCategory {
  id: string;
  name: string;
  description: string;
}

export interface App {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  badge?: string;
  icon?: any;
  features: string[];
  industries: string[];
  isPopular?: boolean;
}
