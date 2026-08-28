export function tagToIconName(tag: string) {
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
}
