import { LINKS } from "@/consts";

export function Footer() {
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
