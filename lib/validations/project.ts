export type ProjectInput = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  href: string;
  preview: string;
  logo?: string | null;
  sortOrder?: number;
  isFeatured?: boolean;
};

export type ProjectPatch = Partial<ProjectInput>;

export function parseProjectInput(body: unknown): ProjectInput | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  const category = data.category;
  const title = data.title;
  const description = data.description;
  const tags = data.tags;
  const meta = data.meta;
  const href = data.href;
  const preview = data.preview;

  if (
    typeof category !== "string" ||
    typeof title !== "string" ||
    typeof description !== "string" ||
    !Array.isArray(tags) ||
    !tags.every((tag) => typeof tag === "string") ||
    typeof meta !== "string" ||
    typeof href !== "string" ||
    typeof preview !== "string"
  ) {
    return null;
  }

  const logo =
    data.logo === null || data.logo === undefined
      ? null
      : typeof data.logo === "string"
        ? data.logo
        : null;

  const sortOrder =
    typeof data.sortOrder === "number" ? data.sortOrder : undefined;

  const isFeatured =
    typeof data.isFeatured === "boolean" ? data.isFeatured : undefined;

  return {
    category,
    title,
    description,
    tags,
    meta,
    href,
    preview,
    logo,
    sortOrder,
    isFeatured,
  };
}

export function parseProjectPatch(body: unknown): ProjectPatch | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const patch: ProjectPatch = {};

  if (typeof data.category === "string") patch.category = data.category;
  if (typeof data.title === "string") patch.title = data.title;
  if (typeof data.description === "string") patch.description = data.description;
  if (
    Array.isArray(data.tags) &&
    data.tags.every((tag) => typeof tag === "string")
  ) {
    patch.tags = data.tags;
  }
  if (typeof data.meta === "string") patch.meta = data.meta;
  if (typeof data.href === "string") patch.href = data.href;
  if (typeof data.preview === "string") patch.preview = data.preview;
  if (data.logo === null || typeof data.logo === "string") {
    patch.logo = data.logo;
  }
  if (typeof data.sortOrder === "number") patch.sortOrder = data.sortOrder;
  if (typeof data.isFeatured === "boolean") patch.isFeatured = data.isFeatured;

  return Object.keys(patch).length > 0 ? patch : null;
}
