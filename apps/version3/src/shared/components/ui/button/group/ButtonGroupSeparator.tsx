import { cn } from '@repo/utils/src';
import { Separator } from '@/shared/components/ui/separator';

export function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn('bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto', className)}
      {...props}
    />
  );
}
