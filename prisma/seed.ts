import data from "../data.json";
import { getPrisma } from "../lib/prisma";

function normalizeLogo(logo?: string) {
  if (!logo) return null;
  return logo.startsWith("/") ? logo : `/${logo}`;
}

async function main() {
  const count = await getPrisma().project.count();
  if (count > 0) {
    console.log(`Database already has ${count} projects. Skipping seed.`);
    return;
  }

  const projects = data.projects.map((project, index) => ({
    category: project.category,
    title: project.title,
    description: project.description,
    tags: project.tags,
    meta: project.meta,
    href: project.href,
    preview: project.preview,
    logo: normalizeLogo(project.logo),
    sortOrder: index,
    isFeatured: index >= data.projects.length - 3,
  }));

  await getPrisma().project.createMany({
    data: projects,
  });

  console.log(`Seeded ${projects.length} projects.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await getPrisma().$disconnect();
  });
