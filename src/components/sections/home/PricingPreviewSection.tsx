import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Check, Users } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../../utils/animations';
import { pricingPlans } from '../../../data/pricing';

const popularPlanVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

export default function PricingPreviewSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  return (
    <Section className="bg-warm-sand border-t border-warm-sage overflow-hidden py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-16">
          <div className="inline-flex items-center rounded-md bg-warm-cream px-4 py-1.5 font-heading text-sm font-bold text-stone-600 ring-1 ring-inset ring-warm-sage mb-6">
            Simple Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl mb-6 leading-[1.1]">
            Choose a Plan That Fits Your Business
          </h2>
          <p className="text-lg leading-relaxed text-stone-600 max-w-xl mx-auto mb-10">
            Start small and expand as your business grows.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-white rounded-lg border border-warm-sage shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-stone-900 text-white shadow-sm' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annually')}
              className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all flex items-center ${
                billingCycle === 'annually' 
                  ? 'bg-stone-900 text-white shadow-sm' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Annually
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {pricingPlans.map((plan) => {
            const ctaStyle = plan.isPopular 
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm hover:shadow-md'
              : plan.id === 'professional'
              ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-sm hover:shadow-md'
              : 'bg-white text-stone-900 hover:bg-warm-cream ring-1 ring-inset ring-warm-sage';

            return (
              <motion.div 
                key={plan.id}
                variants={plan.isPopular ? popularPlanVariant : fadeUp}
                className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-white ring-1 ring-stone-300 shadow-md z-10 lg:scale-105 hover:-translate-y-1 hover:shadow-lg' 
                    : 'bg-white ring-1 ring-warm-sage shadow-sm hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-md bg-stone-900 px-3 py-1.5 text-center text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                    Most Popular
                  </div>
                )}
                
                {/* Card Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{plan.name}</h3>
                  {plan.target && (
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-3">{plan.target}</p>
                  )}
                  <p className="text-sm text-stone-600 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price & Users */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-stone-900">
                      {billingCycle === 'monthly' ? plan.price : (plan.priceAnnually || plan.price)}
                    </span>
                    {plan.period && <span className="text-sm font-semibold text-stone-500">{plan.period}</span>}
                  </div>
                  {plan.period && (
                    <p className="text-xs text-stone-500 font-medium mt-1">
                      {billingCycle === 'annually' ? 'Billed annually' : 'Billed monthly'}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-stone-700 bg-warm-cream w-max px-3 py-1.5 rounded-lg border border-warm-sage">
                    <Users className="h-4 w-4 text-stone-500" />
                    {plan.userLimit}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={plan.ctaLink || '/request-demo'}
                  className={`mt-auto mb-8 block w-full rounded-md px-4 py-3.5 text-center text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${ctaStyle}`}
                >
                  {plan.ctaText}
                </Link>

                {/* Features List */}
                <div className="border-t border-warm-sage pt-6">
                  <p className="text-sm font-bold text-stone-900 mb-4 uppercase tracking-wide">Includes</p>
                  <ul role="list" className="space-y-4 text-sm leading-6 text-stone-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3 items-center">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm-cream">
                          <Check className="h-4 w-4 text-indigo-600" strokeWidth={2.5} aria-hidden="true" />
                        </div>
                        <span className="font-medium text-stone-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
