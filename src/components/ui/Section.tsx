import React from 'react';
import type { SectionProps } from '../../types/design-system';

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-6 sm:py-8 lg:py-14 ${className}`}>
      {children}
    </section>
  );
}
