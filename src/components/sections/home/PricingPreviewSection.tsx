import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Check, Users } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    users: '3 Users',
    description: 'Perfect for small teams getting started.',
    features: ['CRM', 'Sales Lite'],
    ctaText: 'Get Started',
    popular: false,
    ctaStyle: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 ring-1 ring-inset ring-indigo-600/20',
  },
  {
    name: 'Business',
    price: '₹2,999',
    period: '/month',
    users: '10 Users',
    description: 'Ideal for growing businesses.',
    features: ['CRM', 'Sales', 'Billing'],
    ctaText: 'Request Demo',
    popular: true,
    ctaStyle: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm hover:shadow',
  },
  {
    name: 'Professional',
    price: '₹6,999',
    period: '/month',
    users: '25 Users',
    description: 'Designed for businesses managing operations at scale.',
    features: ['CRM', 'Billing', 'Inventory', 'Accounts'],
    ctaText: 'Request Demo',
    popular: false,
    ctaStyle: 'bg-white text-slate-700 hover:bg-slate-50 ring-1 ring-inset ring-slate-300 shadow-sm hover:shadow',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    users: 'Custom',
    description: 'For large and multi-branch organizations.',
    features: ['All Apps', 'Custom Workflows', 'Premium Support'],
    ctaText: 'Contact Sales',
    popular: false,
    ctaStyle: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow',
  }
];

export default function PricingPreviewSection() {
  return (
    <Section className="bg-slate-50 border-t border-slate-200 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center rounded-full bg-emerald-100/80 px-4 py-1.5 font-heading text-sm font-bold text-emerald-800 ring-1 ring-inset ring-emerald-600/20 mb-6">
            Simple Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
            Choose a Plan That Fits Your Business
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 max-w-xl mx-auto">
            Start small and expand as your business grows.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white ring-2 ring-indigo-600 shadow-2xl z-10 lg:scale-105' 
                  : 'bg-white ring-1 ring-slate-200 shadow-md lg:hover:scale-[1.02]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-3 py-1.5 text-center text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  Most Popular
                </div>
              )}
              
              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{plan.name}</h3>
                <p className="text-sm text-slate-600 min-h-[40px] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price & Users */}
              <div className="mb-8">
                <div className="flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-sm font-semibold text-slate-500">{plan.period}</span>}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 w-max px-3 py-1.5 rounded-lg border border-slate-200">
                  <Users className="h-4 w-4 text-indigo-600" />
                  {plan.users}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={`#${plan.name.toLowerCase()}`}
                className={`mt-auto mb-8 block w-full rounded-xl px-4 py-3.5 text-center text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${plan.ctaStyle}`}
              >
                {plan.ctaText}
              </a>

              {/* Features List */}
              <div className="border-t border-slate-100 pt-6">
                <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Includes</p>
                <ul role="list" className="space-y-4 text-sm leading-6 text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                        <Check className="h-4 w-4 text-indigo-600" strokeWidth={2.5} aria-hidden="true" />
                      </div>
                      <span className="font-medium text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
