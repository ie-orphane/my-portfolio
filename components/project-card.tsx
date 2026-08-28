import StackIcon from "tech-stack-icons";
import type { ProjectRecord } from "@/lib/projects";
import { tagToIconName } from "@/lib/tag-to-icon";

type ProjectCardProps = {
  project: ProjectRecord;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="clip-brutal card-glow group flex flex-col overflow-hidden md:col-span-4">
      <div className="flex items-center justify-between gap-2 border-b border-white/10 font-mono text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
        <p className="px-6 py-4">
          <span className="text-white">{project.sortOrder} /</span> {project.category}
        </p>
        {project.logo ? (
          <div className="flex items-center gap-2 border-l border-white/20 p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.logo}
              alt={`${project.category} logo`}
              className="size-7 rounded-sm bg-white object-contain p-0.5"
            />
          </div>
        ) : null}
      </div>
      <div className="relative overflow-hidden border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={project.title}
          src={project.preview}
          className="h-60 w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />
        <p className="absolute bottom-3 left-4 border border-white/25 bg-black/60 px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.16em] text-zinc-200 uppercase backdrop-blur-sm">
          {project.meta}
        </p>
      </div>
      <div className="flex min-h-auto flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-2xl font-black tracking-tight text-white uppercase">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <div className="mt-2 mb-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 rounded-sm border border-white/20 bg-zinc-900 px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.16em] text-zinc-200 uppercase"
            >
              <StackIcon
                name={tagToIconName(tag)}
                className="mb-0.5 size-3"
                variant="dark"
              />
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto px-6 pb-6">
        <div className="flex items-center justify-end border-t border-white/10 pt-4">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.18em] text-zinc-500 uppercase transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
          >
            {project.href.includes("github.com")
              ? "Source Code"
              : "Live Preview"}
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
          </a>
        </div>
      </div>
    </article>
  );
}
