import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { CTA_ROUTES, SITE_CONFIG } from '../../constants';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations';
import { 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  XCircle, 
  Activity, 
  Layers, 
  Zap, 
  Award, 
  Cpu, 
  Globe, 
  HeartHandshake, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function About() {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const pillars = [
    {
      title: "Unified System of Record",
      subtitle: "One database, zero sync errors",
      description: "We rejected the industry standard of building disjointed apps that require complex API bridges and zapier scripts. Cakiweb is engineered on a single relational data model where CRM, Billing, HRMS, and Inventory natively speak the same language.",
      icon: <Layers className="h-6 w-6" />,
      metric: "100%",
      metricLabel: "Data consistency across all departments"
    },
    {
      title: "Obsessive Simplification",
      subtitle: "Enterprise power without the bloat",
      description: "Traditional ERPs take 12 months to implement and require dedicated consultants just to navigate. We design our interfaces with consumer-grade clarity, allowing teams to adopt complex operational workflows in days, not months.",
      icon: <Zap className="h-6 w-6" />,
      metric: "< 14 Days",
      metricLabel: "Average enterprise deployment timeline"
    },
    {
      title: "Engineered for Indian SMEs",
      subtitle: "Native localization & compliance",
      description: "Built from day zero to handle the unique nuances of Indian business operations—from automated GST e-invoicing and TDS calculations to multi-state inventory routing and compliant payroll processing.",
      icon: <Globe className="h-6 w-6" />,
      metric: "GST & TDS",
      metricLabel: "Automated compliance natively built-in"
    },
    {
      title: "Sovereign Reliability",
      subtitle: "Bank-grade security & uptime",
      description: "Your operational data is your most valuable asset. We enforce rigorous role-based access controls (RBAC), end-to-end encryption at rest and in transit, and maintain redundant cloud infrastructure to guarantee 99.99% uptime.",
      icon: <ShieldCheck className="h-6 w-6" />,
      metric: "99.99%",
      metricLabel: "Guaranteed platform availability SLA"
    }
  ];

  const milestones = [
    { year: "2021", title: "The Inception", description: "Founded with a mission to eliminate software tool sprawl for growing Indian businesses." },
    { year: "2022", title: "Core Architecture", description: "Launched the unified data engine connecting CRM, Inventory, and GST Invoicing." },
    { year: "2024", title: "Enterprise Expansion", description: "Introduced advanced HRMS, Project Accounting, and Multi-Warehouse routing modules." },
    { year: "2026", title: "Platform Maturity", description: "Powering daily operations for over 10,000+ forward-thinking users across India." }
  ];

  const values = [
    {
      title: "No Duct-Taped Middleware",
      description: "We never acquire random companies and patch their software together. Every single module in Cakiweb is organically written and maintained by our core engineering team.",
      icon: <Cpu className="h-6 w-6 text-indigo-600" />
    },
    {
      title: "Total TCO Transparency",
      description: "We despise hidden implementation fees, artificial license limits, and predatory vendor lock-in. Our pricing is predictable and aligned with your operational growth.",
      icon: <Award className="h-6 w-6 text-emerald-600" />
    },
    {
      title: "Customer-Centric Evolution",
      description: "Our product roadmap is directly driven by the real-world operational bottlenecks of our clients. When you grow, our platform evolves with you.",
      icon: <HeartHandshake className="h-6 w-6 text-amber-600" />
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-stone-50">
      {/* 1. Hero Section */}
      <Section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 border-b border-warm-sage overflow-hidden">
        <Container>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-600 mb-8 border border-indigo-100 shadow-sm">
              <Sparkles className="h-4 w-4 mr-2 text-indigo-600" />
              Our Mission & Philosophy
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.05] mb-8">
              Architecting the <span className="text-indigo-600 italic font-serif font-medium">unified digital core</span> for modern businesses.
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-xl md:text-2xl text-stone-600 font-medium leading-relaxed mb-10">
              Born out of the frustration of dealing with fragmented, overpriced software suites, {SITE_CONFIG.name} was built to be the connected nervous system for forward-thinking enterprises.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={CTA_ROUTES.requestDemo}
                className="group w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-md bg-indigo-600 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#our-story"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-transparent border border-stone-300 px-8 text-lg font-bold text-stone-900 transition-all hover:bg-stone-200 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
              >
                Explore Our Story
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* 2. The Operational Gap (Problem vs Solution) */}
      <Section className="bg-warm-cream py-24 lg:py-32 border-b border-warm-sage" id="our-story">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6">
              The Software Dilemma We Solved
            </h2>
            <p className="text-xl text-stone-600 font-medium leading-relaxed">
              For two decades, growing businesses have been forced to choose between two fundamentally flawed software models. We created the third way.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {/* The Old Paradigm */}
            <motion.div variants={fadeUp} className="bg-white p-10 lg:p-12 rounded-2xl border border-red-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
              <div>
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1.5 rounded-md mb-6 border border-red-100">
                  The Broken Standard
                </div>
                <h3 className="text-2xl font-extrabold text-stone-900 mb-6">
                  Legacy ERPs & Fragmented Tool Sprawl
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-stone-700 font-medium">Paying 5 different SaaS vendors with 5 separate invoices and escalating per-user fees.</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-stone-700 font-medium">Constant data silos requiring manual CSV exports or fragile middleware scripts.</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-stone-700 font-medium">Clunky 1990s user interfaces that employees actively resist adopting.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-stone-100 text-sm font-bold text-stone-400 italic">
                Result: High operational friction & inflated TCO
              </div>
            </motion.div>

            {/* The Cakiweb Paradigm */}
            <motion.div variants={fadeUp} className="bg-stone-900 text-white p-10 lg:p-12 rounded-2xl border border-stone-800 shadow-lg relative overflow-hidden flex flex-col justify-between ring-1 ring-indigo-500/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
              <div>
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/80 px-3 py-1.5 rounded-md mb-6 border border-indigo-800/50">
                  The {SITE_CONFIG.name} Architecture
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-6">
                  One Unified Business Operating System
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-stone-300 font-medium">A single, predictable subscription covering CRM, Billing, HRMS, and Inventory.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-stone-300 font-medium">Native real-time data flow—when a sale closes, inventory and billing update instantly.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-stone-300 font-medium">Modern, intuitive workflows built for rapid team onboarding and high daily engagement.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-stone-800 text-sm font-bold text-indigo-400">
                Result: 40% reduction in software costs & total visibility
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* 3. Core Architectural Pillars */}
      <Section className="bg-white py-24 lg:py-32 border-b border-warm-sage">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-6xl mx-auto"
          >
            <motion.div variants={slideInLeft} className="lg:w-5/12">
              <div className="inline-flex items-center rounded text-sm font-bold text-stone-500 uppercase tracking-widest mb-6">
                Engineering DNA
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
                Built on four uncompromising pillars.
              </h2>
              <p className="text-lg text-stone-600 font-medium leading-relaxed mb-10">
                We don't build software by checklist. Every module in our ecosystem adheres to a strict architectural philosophy designed for long-term scalability and speed.
              </p>
              
              <div className="space-y-3">
                {pillars.map((pillar, idx) => {
                  const isActive = activePillarIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePillarIndex(idx)}
                      className={`w-full text-left px-6 py-5 rounded-xl border transition-all flex items-center justify-between ${
                        isActive 
                          ? 'bg-indigo-50 border-indigo-200 ring-1 ring-indigo-600/10 shadow-sm' 
                          : 'bg-white border-warm-sage hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`mr-4 p-2 rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-stone-100 text-stone-600'}`}>
                          {pillar.icon}
                        </div>
                        <div>
                          <h3 className={`font-bold text-lg ${isActive ? 'text-indigo-900' : 'text-stone-900'}`}>{pillar.title}</h3>
                          <span className={`text-sm font-medium ${isActive ? 'text-indigo-700' : 'text-stone-500'}`}>{pillar.subtitle}</span>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 transition-transform ${isActive ? 'text-indigo-600 rotate-90' : 'text-stone-400'}`} />
                    </button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-7/12 w-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillarIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-warm-sand border border-warm-sage rounded-2xl p-10 lg:p-14 w-full relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-warm-sage/80">
                    <div className="inline-flex items-center rounded bg-white px-3 py-1 text-sm font-bold text-indigo-600 border border-warm-sage shadow-2xs">
                      Architectural Standard #{activePillarIndex + 1}
                    </div>
                    <div className="text-right">
                      <span className="text-3xl lg:text-4xl font-black text-stone-900 block tracking-tight">
                        {pillars[activePillarIndex].metric}
                      </span>
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                        {pillars[activePillarIndex].metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-extrabold text-stone-900 mb-6">
                    {pillars[activePillarIndex].title}
                  </h3>
                  <p className="text-xl text-stone-700 font-medium leading-relaxed mb-10">
                    {pillars[activePillarIndex].description}
                  </p>
                  
                  <Link
                    to={CTA_ROUTES.requestDemo}
                    className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 text-lg group"
                  >
                    See this in action <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* 4. Impact By The Numbers */}
      <Section className="bg-stone-900 py-24 lg:py-32 border-b border-stone-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none text-white">
          <Activity className="w-full h-full -mr-40" />
        </div>
        <Container className="relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center rounded text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">
              Platform Scale
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Proven operational impact at scale.
            </h2>
            <p className="text-xl text-stone-400 font-medium leading-relaxed">
              We measure our success by the tangible efficiency gains and financial savings delivered to our customer ecosystem.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeUp} className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/80 backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-stone-800 transition-colors">
              <span className="text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">10,000+</span>
              <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Active Daily Users</span>
              <p className="text-stone-400 text-sm font-medium">Powering core business workflows across India every single day.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/80 backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-stone-800 transition-colors">
              <span className="text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">40%</span>
              <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">TCO Reduction</span>
              <p className="text-stone-400 text-sm font-medium">Average savings realized by eliminating redundant software tools.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/80 backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-stone-800 transition-colors">
              <span className="text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">8+</span>
              <span className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">Unified Modules</span>
              <p className="text-stone-400 text-sm font-medium">Deeply integrated suites from CRM & Billing to HRMS & Projects.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/80 backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-stone-800 transition-colors">
              <span className="text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">99.99%</span>
              <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Uptime Guarantee</span>
              <p className="text-stone-400 text-sm font-medium">Redundant cloud infrastructure ensuring enterprise reliability.</p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* 5. Our Guiding Principles */}
      <Section className="bg-warm-sand py-24 lg:py-32 border-b border-warm-sage">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-stone-700 font-medium leading-relaxed">
              How we build, how we operate, and what you can expect when partnering with {SITE_CONFIG.name}.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {values.map((val, idx) => (
              <motion.div 
                variants={fadeUp} 
                key={idx} 
                className="bg-white p-8 lg:p-10 rounded-2xl border border-warm-sage shadow-sm flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-warm-cream border border-warm-sage flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">{val.title}</h3>
                  <p className="text-stone-600 font-medium leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* 6. Company Timeline / Evolution */}
      <Section className="bg-white py-24 lg:py-32 border-b border-warm-sage">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6">
              The Journey of Innovation
            </h2>
            <p className="text-xl text-stone-600 font-medium leading-relaxed">
              From a focused workflow tool to the complete business operating system for modern enterprises.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto relative"
          >
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-warm-sage -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div variants={fadeUp} key={idx} className="flex flex-col md:flex-row items-center justify-between group">
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-3'}`}>
                      <div className="bg-warm-cream p-8 rounded-2xl border border-warm-sage group-hover:border-indigo-300 transition-colors shadow-2xs">
                        <span className="text-sm font-black tracking-widest text-indigo-600 uppercase mb-2 block">{m.year}</span>
                        <h3 className="text-2xl font-bold text-stone-900 mb-2">{m.title}</h3>
                        <p className="text-stone-600 font-medium text-sm leading-relaxed">{m.description}</p>
                      </div>
                    </div>

                    <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-black text-sm ring-8 ring-white shadow-md my-4 md:my-0 md:order-2">
                      {idx + 1}
                    </div>

                    <div className={`w-full md:w-5/12 ${isEven ? 'md:order-3' : 'md:order-1'}`}></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 7. Final Consultative CTA */}
      <Section className="bg-warm-cream py-24 lg:py-32">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl mb-8 leading-[1.05]">
              Let's Discuss Your Operational Architecture.
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-stone-700 mb-12 font-medium leading-relaxed">
              Schedule a consultation with our solutions team. We will analyze your current software stack, identify costly data bottlenecks, and map out a seamless transition to {SITE_CONFIG.name}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={CTA_ROUTES.requestDemo}
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-stone-900 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-stone-800 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream"
              >
                Request Demo
              </Link>
              <Link
                to={CTA_ROUTES.pricing}
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-transparent border border-stone-300 px-8 text-lg font-bold text-stone-900 transition-all hover:bg-stone-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream"
              >
                View Enterprise Pricing
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
