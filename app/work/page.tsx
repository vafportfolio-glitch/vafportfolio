import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import CategoryGrid from "@/components/portfolio/CategoryGrid";

export default async function WorkPage() {
  const supabase = createClient();
  const { data: rawCategories } = await supabase
    .from("folders")
    .select("id, name, sort_order")
    .is("parent_id", null)
    .order("sort_order", { ascending: true });

  const categories = await Promise.all(
    (rawCategories ?? []).map(async (cat) => {
      const [{ count: subfolderCount }, { count: fileCount }] = await Promise.all([
        supabase.from("folders").select("*", { count: "exact", head: true }).eq("parent_id", cat.id),
        supabase.from("files").select("*", { count: "exact", head: true }).eq("folder_id", cat.id),
      ]);
      return { ...cat, subfolderCount: subfolderCount ?? 0, fileCount: fileCount ?? 0 };
    })
  );

  return (
    <main className="min-h-screen bg-black px-8 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 stroke-current">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back home
        </Link>

        <div className="mb-16">
          <h1 className="text-6xl font-black leading-none tracking-tight text-white lg:text-7xl">
            Our{" "}
            <span style={{ color: "#FEC503" }}>Work</span>
          </h1>
        </div>

        <CategoryGrid categories={categories ?? []} />
      </div>
    </main>
  );
}
