import type { SectionProps } from '../../types/design-system';

export function Section({ children, className = '', ...props }: SectionProps) {
  return (
    <section className={`py-4 sm:py-6 lg:py-10 ${className}`} {...props}>
      {children}
    </section>
  );
}
