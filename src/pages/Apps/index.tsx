import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { apps } from '../../data/apps';
import { categories } from '../../data/categories';
import { CTA_ROUTES } from '../../constants';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  TrendingUp, 
  Layers,
  Activity,
  Users,
  Briefcase,
  LayoutGrid
} from 'lucide-react';

export default function Apps() {
  const workflows = [
    {
      title: 'Lead to Cash',
      description: 'Capture leads, convert opportunities, generate invoices, fulfil orders, and track revenue.',
      apps: [
        { id: 'crm', label: 'Capture Leads' },
        { id: 'sales', label: 'Create Quotations' },
        { id: 'billing', label: 'Generate Invoices' },
        { id: 'inventory', label: 'Fulfil Orders' },
        { id: 'accounts', label: 'Track Revenue' }
      ]
    },
    {
      title: 'Hire to Retire',
      description: 'Manage employees from onboarding to payroll.',
      apps: [
        { id: 'hrms', label: 'Manage Employees' },
        { id: 'payroll', label: 'Run Payroll' }
      ]
    },
    {
      title: 'Service Delivery',
      description: 'Plan projects, deliver services, and support customers.',
      apps: [
        { id: 'projects', label: 'Plan & Execute' },
        { id: 'helpdesk', label: 'Support Customers' }
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Apps Hero Section */}
      <Section className="relative overflow-hidden bg-warm-cream pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-warm-sage bg-white px-4 py-1.5 text-sm font-bold text-stone-600 shadow-sm mb-8">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-600"></span>
              The Complete Application Suite
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-7xl mb-8 leading-[1.1]">
              A Complete Business <br className="hidden md:block"/>
              <span className="text-indigo-600">Operating System.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-stone-600 font-medium leading-relaxed">
              Start with the specific modules you need today. Seamlessly expand into a fully connected platform as your business grows.
            </p>
          </div>

          {/* Ecosystem UI Visualization */}
          <div className="max-w-5xl mx-auto bg-white border border-warm-sage rounded-3xl p-8 md:p-12 shadow-sm mb-16 hidden sm:block relative">
             <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative z-10">
               {categories.map((cat, idx) => (
                 <React.Fragment key={cat.id}>
                   <div className="flex flex-col items-center group">
                     <div className="h-20 w-20 rounded-2xl bg-white border border-warm-sage flex items-center justify-center text-indigo-600 mb-4 shadow-sm group-hover:border-indigo-400 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                       {cat.id === 'sales-crm' && <Users className="h-8 w-8" />}
                       {cat.id === 'finance' && <TrendingUp className="h-8 w-8" />}
                       {cat.id === 'operations' && <Activity className="h-8 w-8" />}
                       {cat.id === 'people' && <Briefcase className="h-8 w-8" />}
                       {cat.id === 'growth' && <LayoutGrid className="h-8 w-8" />}
                     </div>
                     <span className="font-bold text-stone-900 text-sm text-center tracking-wide">{cat.name}</span>
                   </div>
                   {idx < categories.length - 1 && (
                     <div className="text-warm-sage flex-grow flex justify-center items-center">
                       <ArrowRight className="h-6 w-6" />
                     </div>
                   )}
                 </React.Fragment>
               ))}
             </div>
             {/* Subtle connecting background line behind the icons */}
             <div className="absolute top-1/2 left-16 right-16 h-px bg-warm-sage z-0 -translate-y-4"></div>
          </div>
          
          <div className="flex justify-center">
            <Link
              to={CTA_ROUTES.requestDemo}
              className="inline-flex h-14 items-center justify-center rounded-xl bg-indigo-600 px-10 text-lg font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 2. Category-Driven Apps Directory (40% cards, 60% storytelling) */}
      <Section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Purpose-built for <br />every department.
            </h2>
            <p className="text-xl text-stone-600 font-medium leading-relaxed">
              Explore our comprehensive suite of applications. Each module is powerful on its own, but transformative when connected together.
            </p>
          </div>

          <div className="space-y-32">
            {categories.map((category, index) => {
              const categoryApps = apps.filter(a => a.category === category.id);
              // Alternate layout: even indices text left, odd text right
              const isEven = index % 2 === 0;

              return (
                <div key={category.id} className="flex flex-col lg:flex-row gap-16 items-center">
                  
                  {/* Storytelling Side (60% visually) */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:order-last lg:pl-12'}`}>
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-600 mb-8 border border-indigo-100">
                      {category.name}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-stone-900 mb-6 leading-tight">
                      {category.id === 'sales-crm' && 'Turn leads into loyal customers, faster.'}
                      {category.id === 'finance' && 'Complete visibility into your financial health.'}
                      {category.id === 'operations' && 'Streamline your core business operations.'}
                      {category.id === 'people' && 'Empower your workforce from day one.'}
                      {category.id === 'growth' && 'Scale your brand and online presence.'}
                    </h3>
                    <p className="text-lg text-stone-600 mb-10 font-medium leading-relaxed">
                      {category.description} Built specifically for modern enterprises looking to break down data silos and empower their {category.name.toLowerCase()} teams.
                    </p>
                    <ul className="space-y-5">
                      {categoryApps.slice(0, 3).map(app => (
                        <li key={app.id} className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-indigo-600 mr-4 shrink-0 mt-0.5" />
                          <span className="text-stone-700 font-bold text-lg">{app.shortDescription}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Structured Cards Side (40% visually) */}
                  <div className="lg:w-1/2 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {categoryApps.map(app => {
                        const Icon = app.icon;
                        return (
                          <div 
                            key={app.id}
                            className="bg-white border border-warm-sage rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group"
                          >
                            <div className="flex items-center mb-6">
                              <div className="h-12 w-12 rounded-xl bg-warm-sand flex items-center justify-center text-indigo-600 mr-4 group-hover:-translate-y-1 transition-transform">
                                {Icon && <Icon className="h-6 w-6" />}
                              </div>
                              <h4 className="text-xl font-bold text-stone-900">{app.name}</h4>
                            </div>
                            <Link to={`/apps/${app.slug}`} className="text-sm font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center">
                              Explore module <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Workflows (Business Journeys) */}
      <Section className="bg-warm-cream border-t border-warm-sage py-24 lg:py-32 overflow-hidden relative">
        <Container>
          <div className="max-w-3xl mb-24 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              End-to-End Business Journeys
            </h2>
            <p className="text-xl text-stone-600 font-medium leading-relaxed">
              Data flows seamlessly across departments, eliminating manual entry and breaking down silos. Here's how our apps work together to automate your core processes.
            </p>
          </div>
          
          <div className="space-y-16 max-w-6xl mx-auto">
            {workflows.map((workflow, idx) => (
              <div key={idx} className="bg-white border border-warm-sage rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row hover:shadow-md transition-shadow">
                
                {/* Storytelling / Outcome side */}
                <div className="bg-stone-900 text-white p-10 md:p-14 md:w-1/3 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-600/30 blur-3xl"></div>
                  <h3 className="text-3xl font-extrabold mb-6 relative z-10 leading-tight">{workflow.title}</h3>
                  <p className="text-stone-300 font-medium text-lg leading-relaxed relative z-10">
                    {workflow.description}
                  </p>
                </div>

                {/* Flow / Cards side */}
                <div className="p-10 md:p-14 md:w-2/3 bg-white flex items-center justify-center">
                  <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
                    {/* Desktop connector line */}
                    <div className="hidden md:block absolute top-8 left-10 right-10 h-px bg-warm-sage z-0"></div>
                    
                    {workflow.apps.map((step, appIdx) => {
                      const app = apps.find(a => a.id === step.id);
                      if (!app) return null;
                      const Icon = app.icon;
                      return (
                        <React.Fragment key={app.id}>
                          <div className="flex flex-col items-center relative z-10 flex-1 group mt-4 md:mt-0">
                            <div className="h-16 w-16 rounded-xl bg-white border border-warm-sage flex items-center justify-center text-indigo-600 shadow-sm mb-5 group-hover:border-indigo-600 group-hover:-translate-y-1 group-hover:shadow-md transition-all">
                              {Icon && <Icon className="h-7 w-7" />}
                            </div>
                            <div className="flex flex-col items-center text-center px-1">
                              <span className="font-bold text-stone-900 text-sm mb-1">{step.label}</span>
                              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">{app.name}</span>
                            </div>
                          </div>
                          
                          {appIdx < workflow.apps.length - 1 && (
                            <div className="flex items-center justify-center text-warm-sage md:hidden h-12 z-0 w-full">
                              <ArrowDown className="h-5 w-5" />
                            </div>
                          )}
                          
                          {appIdx < workflow.apps.length - 1 && (
                            <div className="hidden md:flex items-center justify-center text-warm-sage w-6 pt-5 z-10 relative bg-white px-1">
                              <ArrowRight className="h-5 w-5" />
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Final CTA */}
      <Section className="bg-white border-t border-warm-sage py-32 lg:py-40">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Start With One App.<br />
              <span className="text-indigo-600">Grow Into One Platform.</span>
            </h2>
            
            <p className="mx-auto max-w-2xl text-xl text-stone-600 mb-20 font-medium leading-relaxed">
              Begin with the exact tools you need today. As your business evolves, seamlessly unlock new capabilities without the pain of migrating to a new system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left border-y border-warm-sage py-16">
              <div>
                <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Start Small</h4>
                <p className="text-stone-600 font-medium leading-relaxed">Adopt only what you need to solve today's challenges. Keep costs low and adoption high.</p>
              </div>
              <div>
                <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Grow Without Limits</h4>
                <p className="text-stone-600 font-medium leading-relaxed">Add new modules with a single click. Everything works immediately because it shares the same core.</p>
              </div>
              <div>
                <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                  <Activity className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">One Unified Source</h4>
                <p className="text-stone-600 font-medium leading-relaxed">A single source of truth for all your data. No more syncing errors, API limits, or data silos.</p>
              </div>
            </div>
            
            <Link
              to={CTA_ROUTES.requestDemo}
              className="inline-flex h-16 items-center justify-center rounded-xl bg-indigo-600 px-12 text-xl font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Request a Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
