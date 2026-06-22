import { Link } from 'react-router-dom';
import { Container } from '../../ui/Container';
import { Section } from '../../ui/Section';
import { CTA_ROUTES } from '../../../constants';
import { ArrowRight, Check, TrendingUp, Users, LayoutGrid, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl">
                Run your entire business from one modular SaaS platform
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl max-w-2xl">
                CRM, Billing, Inventory, HRMS, Projects, Helpdesk, Marketing, Website, and Industry Solutions built for growing businesses.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={CTA_ROUTES.requestDemo}
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Request Demo
              </Link>
              <Link
                to="/apps"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explore Apps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Placeholder */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Decorative background blob */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl"></div>
            
            {/* Dashboard Mock Container */}
            <div className="relative z-10 flex flex-col gap-4 rounded-xl border bg-card p-4 sm:p-6 shadow-2xl shadow-primary/5">
              
              {/* Header Mock */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-2">
                  <div className="h-4 w-32 rounded-md bg-muted"></div>
                  <div className="h-3 w-20 rounded-md bg-muted/60"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">A</span>
                </div>
              </div>

              {/* Grid Mock */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Leads Card */}
                <div className="flex flex-col rounded-lg border bg-background p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-sm font-medium text-muted-foreground">Leads</span>
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">1,248</span>
                  <div className="mt-1 flex items-center text-xs text-green-600 font-medium">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +12% this month
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="flex flex-col rounded-lg border bg-background p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-sm font-medium text-muted-foreground">Revenue</span>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">$42,500</span>
                  <div className="mt-1 flex items-center text-xs text-green-600 font-medium">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +8.2% this month
                  </div>
                </div>

                {/* Active Apps Card */}
                <div className="flex flex-col rounded-lg border bg-background p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-sm font-medium text-muted-foreground">Active Apps</span>
                    <LayoutGrid className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">12</span>
                  <div className="mt-1 flex items-center text-xs text-muted-foreground">
                    <Check className="mr-1 h-3 w-3 text-green-600" />
                    All systems operational
                  </div>
                </div>

                {/* Invoices Card */}
                <div className="flex flex-col rounded-lg border bg-background p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-sm font-medium text-muted-foreground">Invoices</span>
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">342</span>
                  <div className="mt-1 flex items-center text-xs text-orange-500 font-medium">
                    4 pending approval
                  </div>
                </div>

              </div>
              
              {/* Bottom activity list mock */}
              <div className="mt-2 space-y-4 rounded-lg border bg-background p-4 shadow-sm">
                <div className="h-3 w-1/4 rounded bg-muted/80"></div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-1/2 rounded bg-muted/50"></div>
                    <div className="h-3 w-12 rounded bg-primary/20"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-1/3 rounded bg-muted/50"></div>
                    <div className="h-3 w-12 rounded bg-primary/20"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
