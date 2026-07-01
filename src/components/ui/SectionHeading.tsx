import type { SectionHeadingProps } from '../../types/design-system';

export function SectionHeading({ title, subtitle, align = 'center', className = '' }: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${alignmentClass} ${className}`}>
      <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-stone-600 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
