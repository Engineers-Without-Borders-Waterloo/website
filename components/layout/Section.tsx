import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'accent';
  spacing?: 'sm' | 'md' | 'lg';
  id?: string;
}

const variantStyles: Record<NonNullable<SectionProps['variant']>, string> = {
  default: 'bg-white text-foreground',
  dark: 'bg-brand-dark text-white',
  accent: 'bg-brand-accent text-foreground',
};

const spacingStyles: Record<NonNullable<SectionProps['spacing']>, string> = {
  sm: 'py-section-sm lg:py-section-md',
  md: 'py-section-sm lg:py-section-lg',
  lg: 'py-section-md lg:py-section-lg',
};

export function Section({
  children,
  className,
  variant = 'default',
  spacing = 'md',
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(variantStyles[variant], spacingStyles[spacing], className)}>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
