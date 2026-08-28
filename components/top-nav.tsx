import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function TopNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <BrandLogo />
          <p className="font-display text-xl font-black text-white uppercase sm:text-2xl">
            LAHYA
          </p>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/projects"
            className="hidden font-mono text-xs font-bold tracking-[0.18em] text-zinc-500 uppercase transition-colors hover:text-white md:inline"
          >
            Projects
          </Link>
          <a
            href="/ILYASS_ELYATIME_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="clip-brutal border border-white bg-white px-6 py-2 font-mono text-[11px] font-bold tracking-[0.2em] text-black uppercase transition-all hover:bg-zinc-200"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
