import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  function nextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }
  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function resetPage() {
    setPageNumber(1);
  }

  return (
    <div className="flex h-full flex-col gap-2 px-2">
      <div className="margin-[20px] flex flex-row items-center justify-center gap-2">
        <button
          className="rounded-sm border-2 border-black px-2 py-1"
          onClick={previousPage}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          className="rounded-sm border-2 border-black px-2 py-1"
          onClick={resetPage}
        >
          Reset
        </button>
        <button
          className="rounded-sm border-2 border-black px-2 py-1"
          onClick={nextPage}
          disabled={pageNumber === numPages}
        >
          Next
        </button>
      </div>
      <Document
        onLoadSuccess={onDocumentLoadSuccess}
        file={pdfUrl}
        onContextMenu={(e) => e.preventDefault()}
        className="flex h-[420px] w-[300px] justify-center border-2 border-yellow-500"
      >
        <Page
          scale={0.5}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          pageNumber={pageNumber}
        />
      </Document>
      <p className="text-center">
        {pageNumber} / {numPages}
      </p>
    </div>
  );
}
