import { EMAIL, LINKS } from "@/consts";
import StackIcon from "tech-stack-icons";
import data from "@/data.json";

const { projects, technologies, journey } = data;

function BrandLogo() {
  return (
    <svg
      width="28"
      height="27"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="size-6 shrink-0"
    >
      <path
        d="M27.7358 38.9465L19.8563 30.5002L11.9768 38.9465L0.472769 38.4772L0 27.6848L8.50984 19.7079L0 11.8873L0.472769 0.625646L11.9768 0L19.8563 8.44622L27.7358 0L39.0822 0.625646L39.555 11.8873L31.0452 19.7079L39.555 27.6848L39.0822 38.4772L27.7358 38.9465Z"
        fill="#F2F2F2"
      />
    </svg>
  );
}

function TopNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo />
          <p className="font-display text-xl font-black text-white uppercase sm:text-2xl">
            La7ya
          </p>
        </div>
        {/* <div className="hidden items-center gap-8 md:flex">
          {[
            ["Projects", "#projects"],
            ["Technologies", "#technologies"],
            ["Journey", "#journey"],
            ["Contact", "#contact"],
          ].map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                index === 0
                  ? "border-b-2 border-white pb-1 text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {label}
            </a>
          ))}
        </div> */}
        <a
          href="/ILYASS_ELYATIME_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="clip-brutal border border-white bg-white px-6 py-2 font-mono text-[11px] font-bold tracking-[0.2em] text-black uppercase transition-all hover:bg-zinc-200"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

const tagToIconName = (tag: string) => {
  const mapping: Record<string, string> = {
    React: "react",
    Laravel: "laravel",
    Expo: "expo",
    Tailwindcss: "tailwindcss",
    Sqlite: "sqlite",
    Python: "python",
    "Next.js": "nextjs2",
    Supabase: "supabase",
    Figma: "figma",
    "Discord.py": "python",
  };
  return mapping[tag] ?? "";
};

function HeroSection() {
  return (
    <section className="grid-bg relative isolate flex min-h-[50vh] items-center overflow-hidden px-6 py-20 md:px-10">
      <div className="glow-orb pointer-events-none absolute -top-20 -left-24 h-72 w-72 rounded-full" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-10">
          <p className="mb-8 flex items-center gap-4 font-mono text-xs tracking-[0.25em] text-zinc-400 uppercase">
            <span className="h-px w-8 bg-zinc-500" />
            Ilyass Elyatime
          </p>
          <h1 className="font-display text-4xl leading-[0.9] font-black tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
            A developer merges
            <br className="hidden md:block" /> Dev with design,
            <br className="hidden md:block" /> powered by AI.
          </h1>
          <div className="mt-10 flex max-w-3xl gap-5">
            <div className="mt-1 h-auto min-h-10 w-0.75 bg-white" />
            <p className="font-mono text-sm leading-relaxed text-zinc-400 md:text-base">
              Engineering digital experiences at the intersection of aesthetic
              precision and algorithmic complexity.
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent" />
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-28 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-display mb-16 text-4xl font-black tracking-tight text-white uppercase md:text-6xl">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-12">
          {projects
            .map((p, i) => ({ ...p, id: i }))
            .reverse()
            .map((project) => (
              <article
                key={project.id}
                className="clip-brutal card-glow group flex flex-col overflow-hidden md:col-span-4"
              >
                <div className="flex items-center justify-between gap-2 border-b border-white/10 font-mono text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                  <p className="px-6 py-4">
                    <span className="text-white">{project.id} /</span>{" "}
                    {project.category}
                  </p>
                  {project.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <div className="flex items-center gap-2 border-l border-white/20 p-2">
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
                <div className="h- flex min-h-auto flex-1 flex-col gap-4 p-6">
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
                        className="rounded-sm border flex items-center gap-1.5 border-white/20 bg-zinc-900 px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.16em] text-zinc-200 uppercase"
                      >
                        <StackIcon
                          name={tagToIconName(tag)}
                          className="size-3 mb-0.5"
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
            ))}
        </div>
      </div>
    </section>
  );
}

function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="border-y border-white/10 bg-zinc-950 px-6 py-28 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl font-black tracking-tight text-white uppercase md:text-5xl">
            Core Stack
          </h2>
          <p className="mt-5 max-w-md text-zinc-400">
            Technical foundations that power both creative direction and robust
            software engineering workflows.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 md:col-span-8">
          {Object.entries(technologies).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-6 border-b border-white/10 pb-3 font-mono text-xs tracking-[0.24em] text-zinc-400 uppercase">
                {group}
              </h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 font-mono text-sm font-bold tracking-[0.08em] text-zinc-200 uppercase transition-transform hover:translate-x-2"
                  >
                    <StackIcon
                      name={item.iconName}
                      className="size-4"
                      variant="dark"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section id="journey" className="px-6 py-28 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-display mb-14 text-4xl font-black tracking-tight text-white uppercase md:text-6xl">
          Journey
        </h2>
        <div className="relative ml-4 border-l border-white/20 pl-8 md:ml-8 md:pl-10">
          {journey.map((entry, index) => (
            <article key={index} className="relative mb-12 last:mb-0">
              <span
                className={`absolute top-1 -left-8 mt-2 size-3 border-3 border-black outline-2 ${
                  index === 0
                    ? "bg-white outline-white"
                    : "bg-zinc-700 outline-black"
                }`}
              />
              <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                <p
                  className={`font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase md:col-span-3 md:pt-2`}
                >
                  {entry.period}
                  <span className="mt-1 block tracking-widest text-zinc-600">
                    {entry.location}
                  </span>
                </p>
                <div className="clip-small border border-white/10 bg-zinc-950 p-6 md:col-span-9">
                  <h3 className="font-display text-2xl font-black tracking-tight text-white uppercase">
                    {entry.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-2">
                      {entry.logo && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={entry.logo}
                          alt={`${entry.place} logo`}
                          className="size-5 shrink-0 rounded-sm bg-white object-contain p-0.5"
                        />
                      )}
                      <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase">
                        {entry.place}
                      </p>
                    </div>
                    {entry.engagement && (
                      <span className="rounded-sm border border-white/20 bg-zinc-900 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.16em] text-zinc-200 uppercase">
                        {entry.engagement}
                      </span>
                    )}
                    {entry.mode && (
                      <span className="rounded-sm border border-white/20 bg-zinc-900 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.16em] text-zinc-200 uppercase">
                        {entry.mode}
                      </span>
                    )}
                  </div>
                  <ul className="mt-5 space-y-3">
                    {entry.points.map((point) => (
                      <li key={point} className="flex gap-3 text-zinc-300">
                        <span className="font-mono text-white">/</span>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="grid-bg relative overflow-hidden px-6 py-32 text-center md:px-10"
    >
      <p className="font-display pointer-events-none absolute inset-0 flex items-center justify-center text-7xl font-black tracking-tight text-white/5 uppercase sm:text-8xl md:text-[12rem]">
        Connect
      </p>
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="font-display text-2xl font-black tracking-[0.12em] text-white uppercase md:text-3xl">
          Ready to engineer the next system?
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="clip-brutal mt-12 inline-block border border-white bg-white px-12 py-4 font-mono text-sm font-bold tracking-[0.2em] text-black uppercase transition hover:bg-zinc-200"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <p className="flex items-center gap-1 font-mono font-bold tracking-[0.2em] text-zinc-500 uppercase">
          <span>©</span>
          <span className="text-[10px]">
            {new Date().getFullYear()} All rights reserved. Engineered with
            precision.
          </span>
        </p>
        <div className="flex gap-6">
          {[
            ["GitHub", LINKS.github],
            ["LinkedIn", LINKS.linkedin],
            ["X-Twitter", LINKS.x_twitter],
            ["Source", LINKS.source],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-black text-white">
      <TopNav />
      <main>
        <HeroSection />
        <ProjectsSection />
        <TechnologiesSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
