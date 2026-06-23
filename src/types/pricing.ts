export interface PricingPlan {
  id: string;
  name: string;
  price: string | number;
  userLimit: string | number;
  description: string;
  features: string[];
  apps: string[];
  isPopular?: boolean;
  ctaText: string;
}
