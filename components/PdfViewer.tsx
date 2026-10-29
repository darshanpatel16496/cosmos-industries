"use client";

import { PDFViewer } from "@embedpdf/react-pdf-viewer";

export default function PdfViewer({ fileUrl }: { fileUrl: string }) {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <PDFViewer
        config={{
          src: fileUrl,
          // Disable the export (download) and print features
          disabledCategories: ["export", "print"], 
          theme: {
            preference: "dark", // Matches your site theme
          },
        }}
      />
    </div>
  );
}