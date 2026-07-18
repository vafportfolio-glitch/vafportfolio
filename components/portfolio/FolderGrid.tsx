"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface Folder { id: string; name: string; sort_order: number }

export default function FolderGrid({ folders }: { folders: Folder[] }) {
  const router = useRouter();
  const [loadingFolderId, setLoadingFolderId] = useState<string | null>(null);

  async function handleOpenFolder(folderId: string) {
    setLoadingFolderId(folderId);
    const supabase = createClient();
    await Promise.all([
      supabase.from("folders").select("id, name, sort_order").eq("parent_id", folderId).order("sort_order", { ascending: true }),
      supabase.from("files").select("id, name, original_name, file_url, mime_type, size, created_at").eq("folder_id", folderId).order("created_at", { ascending: true }),
    ]);
    router.push(`/work/${folderId}`);
    setLoadingFolderId(null);
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {folders.map((folder) => (
        <div
          key={folder.id}
          className="rounded-[20px] p-6 flex flex-col gap-4"
          style={{ background: "#0c120c", border: "1.5px solid #1a2e1a" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "#0a1a0a", border: "1px solid #1a2e1a" }}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 stroke-[#188bf6]">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white">{folder.name}</h3>
          </div>

          <button
            onClick={() => handleOpenFolder(folder.id)}
            disabled={loadingFolderId !== null}
            className="mt-auto flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#188bf6,#37ca37)" }}
          >
            {loadingFolderId === folder.id ? (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="white" d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            ) : (
              <>
                Open Folder
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 stroke-white">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
