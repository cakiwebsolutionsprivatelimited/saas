export interface PricingPlan {
  id: string;
  name: string;
  price: string | number;
  priceAnnually?: string | number;
  userLimit: string | number;
  target?: string;
  period?: string;
  description: string;
  features: string[];
  apps: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink?: string;
}
