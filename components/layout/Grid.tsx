import { cn } from '@/lib/utils';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: { mobile: number; tablet: number; desktop: number };
  gap?: 'sm' | 'md' | 'lg';
}

const gapMap = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
} as const;

const colsMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

const mdColsMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

const lgColsMap: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

export function Grid({
  children,
  className,
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
}: GridProps) {
  return (
    <div
      className={cn(
        'grid',
        colsMap[cols.mobile] ?? 'grid-cols-1',
        mdColsMap[cols.tablet] ?? 'md:grid-cols-2',
        lgColsMap[cols.desktop] ?? 'lg:grid-cols-3',
        gapMap[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
