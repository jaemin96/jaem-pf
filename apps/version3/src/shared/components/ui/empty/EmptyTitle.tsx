import { cn } from '@repo/utils/src';

export function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="empty-title" className={cn('text-lg font-medium tracking-tight', className)} {...props} />;
}
