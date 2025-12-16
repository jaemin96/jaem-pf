import { cn } from '@repo/utils/src';

export const Skeleton = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="skeleton" className={cn('bg-accent animate-pulse rounded-md', className)} {...props} />;
};
