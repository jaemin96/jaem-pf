import { Button } from "@/shared/components/ui";
import { experiencesEn, heroEn, projectsEn, stacksEn } from "../data/en";

export function PortfolioPageEn() {
  const hero = heroEn;
  const stacks = stacksEn;
  const projects = projectsEn;
  const experiences = experiencesEn;

  return (
    <div className="min-h-[calc(100svh-64px)] bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10 lg:px-0 lg:pb-24 lg:pt-12">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80">
                {hero.role}
              </div>
              <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {hero.primaryName}
              </div>
              <p className="text-lg text-foreground/80 sm:text-xl">
                {hero.headline}
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {hero.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              {hero.ctas.map((cta) => (
                <Button key={cta.label} variant={cta.variant} size="lg">
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm">
              <div className="h-28 rounded-xl bg-gradient-to-br from-primary/10 via-primary/20 to-primary/5" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm font-medium text-foreground/80">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-dashed border-border/80 px-3 py-2"
                  >
                    <div className="text-base font-semibold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Skills
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Tech Stack
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {stacks.map((stack) => (
              <div
                key={stack.title}
                className="space-y-3 rounded-xl border border-dashed border-border/80 p-4"
              >
                <div className="text-base font-semibold text-foreground">
                  {stack.title}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {stack.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Work
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Selected Projects
            </h2>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="grid gap-4 rounded-2xl border border-dashed border-border/80 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-lg font-semibold text-foreground">
                      {project.name}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-28 rounded-xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5" />
                  <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                    <span>{project.role}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                      {project.meta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Experience
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Timeline
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={exp.org}
                className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)]"
              >
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  {idx !== experiences.length - 1 && (
                    <div className="mt-1 h-16 w-px bg-border" />
                  )}
                </div>
                <div className="space-y-2 rounded-xl border border-dashed border-border/80 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-base font-semibold text-foreground">
                      {exp.org}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {exp.title}
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


