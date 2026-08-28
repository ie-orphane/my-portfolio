import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { parseProjectInput } from "@/lib/validations/project";

export async function GET() {
  try {
    const projects = await getPrisma().project.findMany({
      orderBy: [{ sortOrder: "desc" }, { createdAt: "desc" }],
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = parseProjectInput(body);

    if (!input) {
      return NextResponse.json(
        { error: "Invalid project payload" },
        { status: 400 },
      );
    }

    const project = await getPrisma().project.create({
      data: {
        category: input.category,
        title: input.title,
        description: input.description,
        tags: input.tags,
        meta: input.meta,
        href: input.href,
        preview: input.preview,
        logo: input.logo,
        sortOrder: input.sortOrder ?? 0,
        isFeatured: input.isFeatured ?? false,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Failed to create project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 },
    );
  }
}
