import { EMAIL } from "@/consts";
import StackIcon from "tech-stack-icons";
import data from "@/data.json";
import { Footer } from "@/components/footer";
import { ProjectsSection } from "@/components/projects-section";
import { TopNav } from "@/components/top-nav";
import { getFeaturedProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

const { technologies, journey } = data;

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

export default async function Home() {
  const projects = await getFeaturedProjects(3);

  return (
    <div className="bg-black text-white">
      <TopNav />
      <main>
        <HeroSection />
        <ProjectsSection projects={projects} showSeeMore />
        <TechnologiesSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
