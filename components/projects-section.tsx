import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import type { ProjectRecord } from "@/lib/projects";

type ProjectsSectionProps = {
  projects: ProjectRecord[];
  showSeeMore?: boolean;
  title?: string;
};

export function ProjectsSection({
  projects,
  showSeeMore = false,
  title = "Projects",
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-6 py-28 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-black tracking-tight text-white uppercase md:text-6xl">
            {title}
          </h2>
          {showSeeMore ? (
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.18em] text-zinc-500 uppercase transition-colors hover:text-white"
            >
              See more
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-3.5 w-3.5"
              >
                <path
                  d="M6 12h12m0 0-4-4m4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ) : null}
        </div>
        {projects.length === 0 ? (
          <p className="font-mono text-sm tracking-[0.12em] text-zinc-500 uppercase">
            No projects yet.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
