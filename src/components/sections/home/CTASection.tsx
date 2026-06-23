import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const trustIndicators = [
  'Modular Apps',
  'GST Ready',
  'Multi-Branch Support',
  'Role-Based Access'
];

export default function CTASection() {
  return (
    <Section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      {/* Background Glows for Premium Feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Center Glow */}
        <div className="absolute -top-1/2 left-1/2 -z-10 h-[40rem] w-[80rem] -translate-x-1/2 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 blur-[120px] rounded-[100%] mx-auto mt-24"></div>
        </div>
        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-indigo-500 blur-[120px] opacity-20"></div>
        {/* Top Right Glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-cyan-500 blur-[120px] opacity-20"></div>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          
          <div className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 font-heading text-sm font-bold text-indigo-300 ring-1 ring-inset ring-indigo-500/20 mb-8">
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-8 leading-[1.1]">
            Start with CRM today.<br className="hidden sm:block" />
            Add more apps as your business grows.
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 mb-12">
            Launch with the tools you need now and unlock billing, inventory, HRMS, projects, helpdesk, marketing, and more whenever you're ready.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#request-demo"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white hover:bg-indigo-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-0.5"
            >
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a
              href="#explore-apps"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-slate-800 px-8 py-4 text-base font-bold text-white hover:bg-slate-700 transition-all ring-1 ring-inset ring-slate-700 hover:ring-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Apps
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-slate-800/60">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2 text-sm font-medium text-slate-400">
                <CheckCircle2 className="h-5 w-5 text-indigo-400" />
                {indicator}
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
