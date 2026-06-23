import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SITE_CONFIG, FOOTER_NAV, CTA_ROUTES } from '../../constants';
import logo from '../../assets/newlogo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const platformNav = FOOTER_NAV.find((group) => group.title === 'Platform')?.items || [];
  const solutionsNav = FOOTER_NAV.find((group) => group.title === 'Solutions')?.items || [];
  const companyNav = FOOTER_NAV.find((group) => group.title === 'Company')?.items || [];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-24 pb-12">
      <Container>
        
        {/* Mini CTA Area */}
        <div className="mb-24 flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-indigo-600 px-8 py-12 text-center md:flex-row md:px-16 md:py-16 md:text-left shadow-lg overflow-hidden relative">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-indigo-500 blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-cyan-400 blur-3xl opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
              Ready to modernize your business operations?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of forward-thinking businesses growing on our platform.
            </p>
          </div>
          <div className="relative z-10">
            <Link
              to={CTA_ROUTES.requestDemo}
              className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-indigo-600 shadow-sm transition-all hover:bg-indigo-50 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
            >
              Request Demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col space-y-6 lg:col-span-2 pr-8">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt={SITE_CONFIG.name} className="h-10 w-auto" />
              <span className="text-2xl font-black tracking-tight text-slate-900">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-base leading-relaxed text-slate-600 max-w-sm">
              Manage CRM, Billing, Inventory, HRMS, Projects and more from one connected platform.
            </p>
          </div>

          {/* Column 2: Product/Platform */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-slate-900 uppercase">
              Product
            </h3>
            <ul className="space-y-4">
              {platformNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-base font-medium text-slate-600 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-slate-900 uppercase">
              Solutions
            </h3>
            <ul className="space-y-4">
              {solutionsNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-base font-medium text-slate-600 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-slate-900 uppercase">
              Company
            </h3>
            <ul className="space-y-4">
              {companyNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-base font-medium text-slate-600 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-slate-200/80 pt-8 sm:flex-row gap-4">
          <p className="text-sm font-medium text-slate-500">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </Container>
    </footer>
  );
}
