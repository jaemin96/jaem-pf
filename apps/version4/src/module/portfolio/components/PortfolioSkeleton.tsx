import { Skeleton } from "@/shared/components/ui";

export function PortfolioSkeleton() {
  return (
    <div className="space-y-16">
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="space-y-3">
        <Skeleton className="aspect-video w-full rounded-md" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
      </div>
    </div>
  );
}
