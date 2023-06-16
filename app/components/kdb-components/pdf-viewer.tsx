// import React, { useState } from "react";
// import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// export default function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
//   const [numPages, setNumPages] = useState<number>(1);
//   const [pageNumber, setPageNumber] = useState(1);
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//   };

//   function nextPage() {
//     if (pageNumber < numPages) {
//       setPageNumber(pageNumber + 1);
//     }
//   }
//   function previousPage() {
//     if (pageNumber > 1) {
//       setPageNumber(pageNumber - 1);
//     }
//   }

//   function resetPage() {
//     setPageNumber(1);
//   }

//   return (
//     <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">

//     <div className="flex h-full flex-col gap-2 px-2">
//       <div className="margin-[20px] flex flex-row items-center justify-center gap-2">
//         <button
//           className="rounded-sm border-2 border-black px-2 py-1"
//           onClick={previousPage}
//           disabled={pageNumber === 1}
//         >
//           Prev
//         </button>
//         <button
//           className="rounded-sm border-2 border-black px-2 py-1"
//           onClick={resetPage}
//         >
//           Reset
//         </button>
//         <button
//           className="rounded-sm border-2 border-black px-2 py-1"
//           onClick={nextPage}
//           disabled={pageNumber === numPages}
//         >
//           Next
//         </button>
//       </div>
//       <div

//       className="flex w-full h-[420px] justify-center border-2 border-yellow-500 overflow-auto"
//       >

//       <Viewer
//         fileUrl={pdfUrl}
//         // className="flex w-[300px] h-[420px] justify-center border-2 border-yellow-500"
//         plugins={[
//             defaultLayoutPluginInstance,
//         ]}
//         defaultScale={SpecialZoomLevel.PageFit}
//     />
//         </div>
//       <p className="text-center">
//         {pageNumber} / {numPages}
//       </p>
//     </div>
//     </Worker>
//   );
// }
