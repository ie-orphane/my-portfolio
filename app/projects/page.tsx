import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ProjectsSection } from "@/components/projects-section";
import { TopNav } from "@/components/top-nav";
import { getProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects | ILYASS ELYATIME",
  description:
    "Selected engineering work across web, mobile, bots, and product design.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="bg-black text-white">
      <TopNav />
      <main>
        <ProjectsSection
          projects={projects}
          title="All Projects"
          showSeeMore={false}
        />
      </main>
      <Footer />
    </div>
  );
}
