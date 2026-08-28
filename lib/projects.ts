import { getPrisma } from "@/lib/prisma";

export type ProjectRecord = {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  href: string;
  preview: string;
  logo: string | null;
  sortOrder: number;
  isFeatured: boolean;
};

export async function getProjects(): Promise<ProjectRecord[]> {
  return getPrisma().project.findMany({
    orderBy: [{ sortOrder: "desc" }, { createdAt: "desc" }],
  });
}

export async function getFeaturedProjects(
  limit = 3,
): Promise<ProjectRecord[]> {
  return getPrisma().project.findMany({
    where: { isFeatured: true },
    orderBy: [{ sortOrder: "desc" }, { createdAt: "desc" }],
    take: limit,
  });
}

export async function getProjectById(
  id: string,
): Promise<ProjectRecord | null> {
  return getPrisma().project.findUnique({
    where: { id },
  });
}
