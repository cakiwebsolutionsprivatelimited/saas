import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { 
  Stethoscope,
  Dumbbell,
  PackageOpen,
  Wrench,
  Building2,
  Laptop,
  GraduationCap,
  Factory,
  ArrowRight
} from 'lucide-react';

const featuredIndustry = {
  name: 'Distributor & Wholesale',
  description: 'Manage inventory, quotations, sales orders, and customer relationships.',
  icon: PackageOpen,
  badge: 'Most Popular'
};

const industries = [
  {
    name: 'Pharmacy & Clinic',
    description: 'Manage patients, billing, inventory, appointments, and operations.',
    icon: Stethoscope
  },
  {
    name: 'Gym & Fitness Center',
    description: 'Track memberships, attendance, renewals, and payments.',
    icon: Dumbbell
  },
  {
    name: 'Service & Repair Business',
    description: 'Handle service requests, technicians, invoices, and customer support.',
    icon: Wrench
  },
  {
    name: 'Real Estate Agency',
    description: 'Track leads, properties, site visits, and customer communications.',
    icon: Building2
  },
  {
    name: 'IT Service Company',
    description: 'Manage projects, support tickets, teams, and client engagements.',
    icon: Laptop
  },
  {
    name: 'Coaching & Education Center',
    description: 'Manage students, admissions, fees, schedules, and communication.',
    icon: GraduationCap
  },
  {
    name: 'Manufacturing Business',
    description: 'Track production, inventory, procurement, and operations.',
    icon: Factory
  }
];

export default function IndustrySolutionsSection() {
  return (
    <Section className="bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Content + Featured Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 flex flex-col h-full">
            <div>
              <div className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 font-heading text-sm font-bold text-indigo-800 ring-1 ring-inset ring-indigo-600/20 mb-6">
                Industry Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6 leading-[1.1]">
                Built for Businesses Across Industries
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Purpose-built solutions for different business types, all powered by the same connected platform.
              </p>
            </div>

            {/* Featured Card */}
            <div className="group relative flex flex-col rounded-3xl bg-slate-900 p-8 shadow-2xl overflow-hidden mt-4">
              {/* Background accent */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500 blur-[80px] opacity-30 transition-opacity duration-500 group-hover:opacity-50" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 flex items-start justify-between">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 ring-1 ring-inset ring-indigo-500/30 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <featuredIndustry.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <div className="inline-flex items-center rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
                    {featuredIndustry.badge}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {featuredIndustry.name}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-8 flex-grow">
                  {featuredIndustry.description}
                </p>
                
                <a href="#distributor" className="inline-flex w-max items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md">
                  Explore Solution <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const isLast = idx === industries.length - 1;
                
                return (
                  <div 
                    key={ind.name}
                    className={`group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 ${isLast ? 'md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6' : 'flex flex-col'}`}
                  >
                    <div className={`shrink-0 inline-flex items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-colors duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 ${isLast ? 'h-16 w-16' : 'h-12 w-12 mb-5'}`}>
                      <Icon className={isLast ? 'h-8 w-8' : 'h-6 w-6'} strokeWidth={1.5} />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                    
                    <a href={`#industry-${idx}`} className="absolute inset-0 rounded-2xl focus:outline-none">
                      <span className="sr-only">Learn more about {ind.name}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
