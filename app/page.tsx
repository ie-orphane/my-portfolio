import { LINKS } from "@/consts";
import StackIcon from "tech-stack-icons";

const projects = [
  {
    id: "01",
    category: "JADARA",
    title: "YES Africa",
    description:
      "Assisted in building the Youth Empowerment Summit website and its management backoffice to improve engagement and streamline operations.",
    tags: ["Web", "Backoffice"],
    meta: "Website • Platform",
    href: "https://youthempowermentsummit.africa/",
    image: "/assets/yesafrica.png",
  },
  {
    id: "02",
    category: ".Learning",
    title: "DotBot",
    description:
      "Developed an interactive personal learning bot for coding practice with automation features supporting self-learning.",
    tags: ["Python", "Automation"],
    meta: "Bot • Learning",
    href: "https://github.com/ie-orphane/.learning.bot",
    image:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "03",
    category: "Casamemoire",
    title: "Casatourat",
    description:
      "Built the front-end for web and mobile, created API interfaces between backoffice and app, and implemented backend architecture for smooth cross-platform data flow.",
    tags: ["Frontend", "API", "Backend"],
    meta: "Web + Mobile",
    href: "https://casatourat.ma/",
    image: "/assets/casatourat.png",
  },
  {
    id: "04",
    category: "LionsGeek",
    title: "LionBot",
    description:
      "Built a community management and automation bot with leaderboards, challenge/review workflows, and gamified rewards to increase engagement.",
    tags: ["Python", "Community"],
    meta: "Automation • Gamification",
    href: "https://github.com/ie-orphane/lionbot",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "05",
    category: "LionsGeek",
    title: "LionsGeek.ma",
    description:
      "Designed and developed a landing page to showcase digital marketing and coding expertise with stronger user engagement.",
    tags: ["Landing Page", "Design"],
    meta: "Marketing • Web",
    href: "https://lionsgeek.ma/",
    image: "/assets/lionsgeek.png",
  },
];

const technologies = {
  Frameworks: [
    { name: "Next.js", iconName: "nextjs2" },
    { name: "Tailwind CSS", iconName: "tailwindcss" },
    { name: "Expo", iconName: "expo" },
    { name: "Laravel", iconName: "laravel" },
  ],
  Languages: [
    { name: "Python", iconName: "python" },
    { name: "C / C++", iconName: "c++" },
    { name: "TypeScript", iconName: "typescript" },
  ],
  Tools: [
    { name: "Git", iconName: "git" },
    { name: "Bash", iconName: "bash" },
    { name: "Bun", iconName: "bunjs" },
    { name: "Figma", iconName: "figma" },
  ],
};

function BrandLogo() {
  return (
    <svg
      width="28"
      height="27"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M27.7358 38.9465L19.8563 30.5002L11.9768 38.9465L0.472769 38.4772L0 27.6848L8.50984 19.7079L0 11.8873L0.472769 0.625646L11.9768 0L19.8563 8.44622L27.7358 0L39.0822 0.625646L39.555 11.8873L31.0452 19.7079L39.555 27.6848L39.0822 38.4772L27.7358 38.9465Z"
        fill="#F2F2F2"
      />
    </svg>
  );
}

const journey = [
  {
    period: "10/2024 - 03/2026",
    title: "Software Engineering",
    place: "1337 Coding School (UM6P)",
    points: [
      "Developed strong C proficiency through hands-on projects including personal libraries.",
      "Built a 2D game and gained practical experience in graphics rendering and game logic.",
      "Learned algorithm design, including sorting and searching techniques for optimization.",
    ],
  },
  {
    period: "10/2023 - 04/2024",
    title: "Web Development",
    place: "LionsGeek",
    points: [
      "Built a strong foundation in HTML, CSS, and JavaScript with exposure to React.",
      "Worked on backend web applications using Laravel.",
      "Used Git for collaboration and delivery of responsive user-friendly websites.",
    ],
  },
  {
    period: "10/2022 - 02/2023",
    title: "Coding with Python",
    place: "GOMYCODE",
    points: [
      "Learned data structures and object-oriented programming fundamentals.",
      "Used NumPy, Pandas, and Matplotlib for data analysis tasks.",
      "Built scripting and automation skills for practical workflows.",
    ],
  },
];

function TopNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl px-6 py-5 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo />
          {/* <p className="font-display text-lg font-black tracking-tight text-white sm:text-xl">
            IE_PORTFOLIO
          </p> */}
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
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="clip-brutal border border-white bg-white px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-zinc-200"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="grid-bg relative isolate flex min-h-[50vh] items-center overflow-hidden px-6 py-20 md:px-10">
      <div className="glow-orb pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12  gap-8">
        <div className="col-span-12 lg:col-span-10">
          <p className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
            <span className="h-px w-8 bg-zinc-500" />
            Ilyass Elyatime // Developer
          </p>
          <h1 className="font-display text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
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
        <h2 className="mb-16 font-display text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="clip-brutal card-glow group relative overflow-hidden md:col-span-4"
            >
              <span className="pointer-events-none absolute right-0 top-0 h-14 w-14 border-l border-b border-white/20 bg-white/5" />
              <p className="border-b border-white/10 px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                <span className="text-white">{project.id} /</span>{" "}
                {project.category}
              </p>
              <div className="relative overflow-hidden border-b border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={project.title}
                  src={project.image}
                  className="h-60 w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />
                <p className="absolute bottom-3 left-4 border border-white/25 bg-black/60 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-200 backdrop-blur-sm">
                  {project.meta}
                </p>
              </div>
              <div className="flex min-h-60 flex-col p-6">
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/20 bg-zinc-900 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    {project.href.includes("github.com")
                      ? "Source Code"
                      : "Live Preview"}
                  </span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-transform duration-200 group-hover:translate-x-1"
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
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
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
              <h3 className="mb-6 border-b border-white/10 pb-3 font-mono text-xs uppercase tracking-[0.24em] text-zinc-400">
                {group}
              </h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.08em] text-zinc-200 transition-transform hover:translate-x-2"
                  >
                    <StackIcon
                      name={item.iconName}
                      className="size-4 "
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
        <h2 className="mb-14 font-display text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
          Journey
        </h2>
        <div className="relative ml-4 border-l border-white/20 pl-8 md:ml-8 md:pl-10">
          {journey.map((entry, index) => (
            <article key={entry.title} className="relative mb-12 last:mb-0">
              <span
                className={`absolute -left-8.5 top-1 h-3 w-3 border-4 border-black ${
                  index === 0 ? "bg-white" : "bg-zinc-700"
                }`}
              />
              <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 md:col-span-3 md:pt-2">
                  {entry.period}
                </p>
                <div className="clip-small border border-white/10 bg-zinc-950 p-6 md:col-span-9">
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">
                    {entry.title}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {entry.place}
                  </p>
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
      <p className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-7xl font-black uppercase tracking-tight text-white/5 sm:text-8xl md:text-[12rem]">
        Connect
      </p>
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="font-display text-2xl font-black uppercase tracking-[0.12em] text-white md:text-3xl">
          Ready to engineer the next system?
        </p>
        <a
          href="mailto:contact@elyatime.dev"
          className="clip-brutal mt-12 inline-block border border-white bg-white px-12 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-zinc-200"
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
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          (c) 2026 All rights reserved. Engineered with precision.
        </p>
        <div className="flex gap-6">
          {[
            ["GitHub", LINKS.github],
            ["LinkedIn", LINKS.linkedin],
            ["Source", "#"],
            ["X", LINKS.x_twitter],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
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
