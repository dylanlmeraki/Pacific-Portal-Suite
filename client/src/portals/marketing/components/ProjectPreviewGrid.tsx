import { ProjectCard, ProjectSummary } from "./ProjectCard";

export function ProjectPreviewGrid(props: { projects: ProjectSummary[]; max?: number }) {
  const max = props.max ?? 6;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[color:var(--pe-blue)]" aria-hidden="true" />
              <span className="text-[color:var(--pe-blue)] text-xs font-bold tracking-[0.2em] uppercase">
                Project experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[color:var(--pe-text)] tracking-tight">
              Relevant work
            </h2>
          </div>

          <a
            href="/project-gallery"
            className="text-sm font-bold text-[color:var(--pe-blue)] hover:text-[color:var(--pe-blue-light)]"
          >
            View all projects →
          </a>
        </div>

        {props.projects.length === 0 ? (
          <div className="rounded-lg border border-[color:var(--pe-border)] bg-[color:var(--pe-surface-2)] p-8 text-slate-600">
            Featured projects coming soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.projects.slice(0, max).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
