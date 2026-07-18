"use client";

import { useState } from "react";

interface FileItem {
  id: string;
  name: string;
  original_name: string;
  file_url: string;
  mime_type: string;
  size: number;
  created_at: string;
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getExt(originalName: string) {
  return originalName.split(".").pop()?.toUpperCase() ?? "";
}

function isImage(mime: string) { return mime.startsWith("image/"); }
function isPdf(mime: string) { return mime === "application/pdf"; }
function isSheet(mime: string) {
  return mime.includes("spreadsheet") || mime.includes("excel") || mime.includes("csv");
}

function pdfThumbnail(url: string) {
  // Cloudinary PDF → jpg page 1 transform
  return url.replace("/upload/", "/upload/w_400,h_280,c_fill,pg_1,f_jpg/");
}

function SpreadsheetMock() {
  return (
    <div className="h-full w-full p-3 flex flex-col gap-1.5" style={{ background: "#0a1a0a" }}>
      <div className="flex gap-1.5">
        {[40, 70, 55].map((w, i) => (
          <div key={i} className="h-4 rounded" style={{ width: `${w}%`, background: "#1a2e1a" }} />
        ))}
      </div>
      {[0, 1, 2, 3, 4].map((row) => (
        <div key={row} className="flex gap-1.5">
          {[35, 65, 50].map((w, i) => (
            <div key={i} className="h-3 rounded" style={{ width: `${w}%`, background: row === 0 ? "#1e3a1e" : "#111d11" }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function FilesGrid({ files }: { files: FileItem[] }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  function handleClick(file: FileItem) {
    if (isImage(file.mime_type)) {
      setLightbox(file.file_url);
    } else {
      window.open(file.file_url, "_blank");
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {files.map((file) => (
          <button
            key={file.id}
            onClick={() => handleClick(file)}
            className="group rounded-[16px] overflow-hidden text-left transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "#0c120c", border: "1.5px solid #1a2e1a" }}
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
              {isImage(file.mime_type) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={file.file_url} alt={file.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              )}
              {isPdf(file.mime_type) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={pdfThumbnail(file.file_url)} alt={file.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              )}
              {isSheet(file.mime_type) && <SpreadsheetMock />}
              {!isImage(file.mime_type) && !isPdf(file.mime_type) && !isSheet(file.mime_type) && (
                <div className="flex h-full w-full items-center justify-center" style={{ background: "#0a1a0a" }}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 stroke-gray-600">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
              )}
              {/* ext badge */}
              <span className="absolute bottom-2 left-2 rounded px-1.5 py-0.5 text-[10px] font-bold text-white" style={{ background: "rgba(0,0,0,0.6)" }}>
                {getExt(file.original_name)}
              </span>
            </div>

            {/* Info */}
            <div className="px-4 py-3">
              <p className="truncate text-sm font-semibold text-white">{file.name}</p>
              <p className="mt-0.5 text-xs text-gray-500">{formatSize(file.size)}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 stroke-current">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
