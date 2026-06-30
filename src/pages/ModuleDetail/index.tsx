import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight,
  Blocks,
  Activity,
  Layers,
  Building2,
  Workflow
} from 'lucide-react';
import { apps } from '../../data/apps';
import { industries } from '../../data/industries';
import CTASection from '../../components/sections/home/CTASection';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ModuleDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const app = apps.find(a => a.slug === slug);

  if (!app) {
    return <Navigate to="/apps" replace />;
  }

  const relatedIndustries = industries.filter(ind => app.industries.includes(ind.id));
  const connectedModules = (app.connectedModules || []).map(conn => {
    const matchedApp = apps.find(a => a.id === conn.id);
    return matchedApp ? { app: matchedApp, conn } : null;
  }).filter((x): x is NonNullable<typeof x> => x !== null);
  const Icon = app.icon || Blocks;

  return (
    <div className="bg-stone-50 min-h-screen pt-14">
      {/* 1. Hero Section */}
      <section className="relative pt-4 pb-6overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeUp} className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 mb-6 uppercase tracking-wider">
                <Icon className="h-4 w-4 mr-2" />
                {app.name} Module
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight mb-6">
                {app.businessOutcome || app.shortDescription}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
                {app.businessProblem || app.description}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/request-demo" className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-bold rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Metrics Panel */}
            {app.metrics && app.metrics.length > 0 && (
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white rounded-2xl shadow-xl border border-stone-100 p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 text-indigo-50 opacity-50">
                  <Activity className="w-64 h-64" />
                </div>
                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-8">Business Impact</h3>
                <div className="space-y-8 relative z-10">
                  {app.metrics.map((metric, idx) => (
                    <div key={idx} className="border-l-4 border-indigo-500 pl-6">
                      <div className="text-4xl lg:text-5xl font-extrabold text-stone-900 mb-2">{metric.value}</div>
                      <div className="text-stone-600 font-medium">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Common Business Challenges */}
      {app.challenges && app.challenges.length > 0 && (
        <section className="py-20 bg-white border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl mb-4">
                The high cost of doing nothing
              </h2>
              <p className="text-lg text-stone-600">
                Are these operational bottlenecks holding your business back?
              </p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {app.challenges.map((challenge, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-stone-50 rounded-xl p-8 border border-stone-100">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-6">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{challenge.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{challenge.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* 3. How This Module Works (Workflow) */}
      {app.workflow && app.workflow.length > 0 && (
        <section className="py-24 bg-stone-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6 text-white">
                How {app.name} transforms your workflow
              </h2>
              <p className="text-xl text-stone-400">
                A streamlined, end-to-end process designed to eliminate friction and accelerate results.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-stone-800 hidden md:block"></div>
              
              <div className="space-y-12">
                {app.workflow.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    className="relative md:pl-24"
                  >
                    <div className="hidden md:flex absolute left-0 top-1 w-16 h-16 bg-indigo-900 rounded-2xl border border-indigo-700 items-center justify-center text-indigo-300 font-bold text-xl z-10">
                      0{idx + 1}
                    </div>
                    <div className="md:hidden inline-flex items-center justify-center w-10 h-10 bg-indigo-900 rounded-lg text-indigo-300 font-bold mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-stone-400 text-lg leading-relaxed max-w-2xl">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Key Capabilities */}
      {app.capabilities && app.capabilities.length > 0 && (
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl mb-4">
                Key Capabilities
              </h2>
              <p className="text-lg text-stone-600">
                Everything you need to execute efficiently, built right in.
              </p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {app.capabilities.map((cap, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-center text-indigo-600">
                      <Layers className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{cap.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* 5. Connected Platform & 6. Business Outcomes */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Connected Platform */}
            {connectedModules.length > 0 && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-200">
                <h3 className="text-2xl font-extrabold text-stone-900 mb-8 flex items-center">
                  <Workflow className="w-6 h-6 mr-3 text-indigo-600" />
                  Better Together
                </h3>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  {app.name} shares the exact same database as the rest of the platform. No integrations required.
                </p>
                <div className="space-y-4">
                  {connectedModules.map(({ app: mod, conn }) => (
                    <Link key={mod.id} to={`/apps/${mod.slug}`} className="group flex items-center justify-between p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          {mod.icon ? <mod.icon className="w-5 h-5" /> : <Blocks className="w-5 h-5" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900">
                            {mod.name}
                            <span className="text-stone-400 font-normal text-sm ml-2">({conn.relationship})</span>
                          </h4>
                          <p className="text-sm text-stone-500 mt-1">{conn.businessValue}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-stone-300 group-hover:text-indigo-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Outcomes */}
            {app.outcomes && app.outcomes.length > 0 && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <h2 className="text-3xl font-extrabold text-stone-900 mb-8">
                  Guaranteed Outcomes
                </h2>
                <div className="space-y-6">
                  {app.outcomes.map((outcome, idx) => (
                    <motion.div key={idx} variants={fadeUp} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5 mr-4" />
                      <span className="text-lg text-stone-700 font-medium">{outcome}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-stone-200">
                  <Link to="/pricing" className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center">
                    View pricing plans <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* 7. Industries Using This Module */}
      {relatedIndustries.length > 0 && (
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl mb-4">
                Trusted across industries
              </h2>
              <p className="text-lg text-stone-600">
                See how different sectors utilize {app.name} to optimize their operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedIndustries.map((industry) => (
                <Link key={industry.id} to="/industries" className="block group">
                  <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all h-full">
                    <Building2 className="w-8 h-8 text-stone-400 group-hover:text-indigo-600 mb-4 transition-colors" />
                    <h3 className="font-bold text-stone-900 mb-2">{industry.name}</h3>
                    <p className="text-sm text-stone-500 line-clamp-3">{industry.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FAQ */}
      {app.faqs && app.faqs.length > 0 && (
        <section className="py-24 bg-white border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {app.faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Final CTA */}
      <CTASection />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden bg-white hover:border-stone-300 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between focus:outline-none focus:bg-stone-50 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-stone-900 text-lg pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-stone-400 shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-stone-400 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
          {answer}
        </div>
      )}
    </div>
  );
}
