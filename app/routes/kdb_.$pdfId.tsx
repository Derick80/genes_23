import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import z from "zod";
import { zx } from "zodix";
import { getPdfLibraryItem } from "~/server/pdf.server";

export async function loader({ request, params }: LoaderArgs) {
  console.log("params", params);

  const { pdfId } = zx.parseParams(params, {
    pdfId: z.string().nonempty(),
  });
  const pdfItem = await getPdfLibraryItem(pdfId);
  if (!pdfItem) {
    throw new Error("pdfItem not found");
  }
  console.log(pdfItem.abstract as string, "pdfItem.abstract");

  const tst = JSON.stringify(pdfItem.abstract, null, 2);
  console.log("tst", tst);

  return json({ pdfItem });
}

export default function KdbPdfItemRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="mt-15 mb-10 flex h-full w-full flex-row items-center justify-center">
      {<div dangerouslySetInnerHTML={{ __html: data.pdfItem.abstract }} />}
      <details>
        <pre className="whitespace-break-spaces">
          {JSON.stringify(data.pdfItem.abstract, null, 2)}
        </pre>
      </details>
    </div>
  );
}
