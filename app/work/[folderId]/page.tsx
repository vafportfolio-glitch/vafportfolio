import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import FolderGrid from "@/components/portfolio/FolderGrid";
import FilesGrid from "@/components/portfolio/FilesGrid";

interface Crumb { id: string; name: string; parent_id: string | null }

export default async function FolderPage({ params }: { params: Promise<{ folderId: string }> }) {
  const { folderId } = await params;
  const supabase = createClient();

  const [{ data: folder }, { data: subfolders }, { data: files }] = await Promise.all([
    supabase.from("folders").select("id, name, sort_order, parent_id").eq("id", folderId).single(),
    supabase.from("folders").select("id, name, sort_order").eq("parent_id", folderId).order("sort_order", { ascending: true }),
    supabase.from("files").select("id, name, original_name, file_url, mime_type, size, created_at").eq("folder_id", folderId).order("created_at", { ascending: true }),
  ]);

  if (!folder) notFound();

  // Build breadcrumb by walking up ancestors
  const crumbs: Crumb[] = [];
  let parentId = folder.parent_id;
  while (parentId) {
    const { data: ancestor } = await supabase.from("folders").select("id, name, sort_order, parent_id").eq("id", parentId).single();
    if (!ancestor) break;
    crumbs.unshift(ancestor);
    parentId = ancestor.parent_id;
  }

  return (
    <main className="min-h-screen bg-black px-8 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-10 flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/work" className="transition-colors hover:text-white">Work</Link>
          {crumbs.map((c) => (
            <span key={c.id} className="flex items-center gap-1.5">
              <span>/</span>
              <Link href={`/work/${c.id}`} className="transition-colors hover:text-white">{c.name}</Link>
            </span>
          ))}
          <span>/</span>
          <span className="text-white">{folder.name}</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-5xl font-black leading-none tracking-tight text-white lg:text-6xl">
            {folder.name}
          </h1>
        </div>

        {/* Subfolders */}
        {subfolders && subfolders.length > 0 && (
          <section className="mb-14">
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">Folders</h2>
            <FolderGrid folders={subfolders} />
          </section>
        )}

        {/* Files */}
        {files && files.length > 0 && (
          <section>
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">Files</h2>
            <FilesGrid files={files} />
          </section>
        )}

        {(!subfolders?.length && !files?.length) && (
          <p className="text-gray-500">This folder is empty.</p>
        )}
      </div>
    </main>
  );
}
