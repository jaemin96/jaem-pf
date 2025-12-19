import { Skeleton } from "@/shared/components/ui";

export function PortfolioSkeleton() {
  return (
    <div className="min-h-[calc(100svh-64px)] bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10 lg:px-0 lg:pb-24 lg:pt-12">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <Skeleton className="h-9 w-40 rounded-full" />
              <Skeleton className="h-11 w-3/4" />
              <Skeleton className="h-11 w-2/3" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Skeleton className="h-9 w-32 rounded-full" />
              <Skeleton className="h-9 w-28 rounded-full" />
              <Skeleton className="h-9 w-24 rounded-full" />
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="h-40 w-full rounded-2xl md:h-52" />
            <div className="grid grid-cols-3 gap-3">
              <Skeleton className="h-12 w-full rounded-xl" />
              <Skeleton className="h-12 w-full rounded-xl" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24 rounded-full" />
            <Skeleton className="h-7 w-40" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="space-y-3 rounded-xl border border-dashed border-border/80 p-4"
              >
                <Skeleton className="h-6 w-1/2" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Skeleton className="h-5 w-10 rounded-full" />
                  <Skeleton className="h-5 w-12 rounded-full" />
                  <Skeleton className="h-5 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24 rounded-full" />
            <Skeleton className="h-7 w-44" />
          </div>

          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="grid gap-4 rounded-2xl border border-dashed border-border/80 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-5"
              >
                <div className="space-y-3">
                  <Skeleton className="h-6 w-2/3" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-14 rounded-full" />
                    <Skeleton className="h-5 w-12 rounded-full" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-28 w-full rounded-xl" />
                  <div className="flex justify-between gap-3">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-28 rounded-full" />
            <Skeleton className="h-7 w-48" />
          </div>

          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)]"
              >
                <div className="flex flex-col items-center">
                  <Skeleton className="h-3 w-3 rounded-full" />
                  {idx !== 3 && <Skeleton className="mt-1 h-16 w-px" />}
                </div>
                <div className="space-y-2 rounded-xl border border-dashed border-border/80 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-4 w-3/5" />
                  <div className="space-y-1.5 pt-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-11/12" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
