"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import SearchBar from "./SearchBar";

interface Category {
  id: string;
  name: string;
  sort_order: number;
  subfolderCount: number;
  fileCount: number;
}

const NICHE_CATEGORY_NAME = "niche-specific systems";

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const [loadingFolderId, setLoadingFolderId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [nicheFirst, setNicheFirst] = useState(false);

  const placeholders = categories.map((c) => c.name);

  const filtered = query.trim()
    ? categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
    : categories;

  // When the toggle is on, show only the niche-specific category — hide everything else.
  const displayed = nicheFirst
    ? filtered.filter((c) => c.name.toLowerCase().includes(NICHE_CATEGORY_NAME))
    : filtered;

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

  if (categories.length === 0) {
    return <p className="text-gray-500">No categories found.</p>;
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholders={placeholders.length ? placeholders : ["Search folders..."]}
          disabled={nicheFirst}
          disabledMessage="Turn off the Niche Systems toggle to search"
        />

        <button
          onClick={() => {
            setQuery("");
            setNicheFirst((v) => !v);
          }}
          className="flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-medium transition-all duration-300"
          style={{
            background: nicheFirst ? "rgba(0,152,253,0.15)" : "rgba(255,255,255,0.03)",
            border: nicheFirst ? "1px solid rgba(0,152,253,0.4)" : "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(20px)",
            color: nicheFirst ? "#0098FD" : "rgba(255,255,255,0.7)",
          }}
        >
          <span
            className="relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors duration-300"
            style={{ background: nicheFirst ? "#0098FD" : "rgba(255,255,255,0.2)" }}
          >
            <span
              className="inline-block h-3 w-3 rounded-full bg-white transition-transform duration-300"
              style={{ transform: nicheFirst ? "translateX(14px)" : "translateX(2px)" }}
            />
          </span>
          Niche Systems
        </button>

        <p className="ml-auto shrink-0 text-sm text-gray-500">
          {displayed.length} {displayed.length === 1 ? "category" : "categories"}
          {query && ` for "${query}"`}
        </p>
      </div>

      {displayed.length === 0 ? (
        <p className="text-gray-500 text-sm">
          {nicheFirst
            ? "No niche-specific systems category found."
            : `No folders match "${query}"`}
        </p>
      ) : (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {displayed.map((cat) => (
        <div
          key={cat.id}
          className="relative rounded-[20px] p-6 flex flex-col gap-4 transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          }}
        >
          {/* top shimmer — same as the search bar / navbar */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 stroke-white">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white">{cat.name}</h2>
          </div>

          <div className="flex items-center gap-3 text-xs" style={{ color: "#6b7280" }}>
            <span>{cat.subfolderCount} subfolders</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>{cat.fileCount} files</span>
          </div>

          <button
            onClick={() => handleOpenFolder(cat.id)}
            disabled={loadingFolderId !== null}
            className="mt-auto flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "rgba(0,152,253,0.18)",
              border: "1px solid rgba(0,152,253,0.4)",
              backdropFilter: "blur(10px)",
            }}
          >
            {loadingFolderId === cat.id ? (
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
      )}
    </div>
  );
}
