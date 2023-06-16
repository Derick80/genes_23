import type { Prisma } from "@prisma/client";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import KdbWelcome from "~/components/kdb-components/kdb-welcome";
import PdfList from "~/components/kdb-components/pdf-library-list";
import { prisma } from "~/server/prisma.server";
export function shouldRevalidate() {
  return true;
}

export async function loader({ request, params }: LoaderArgs) {
  const url = new URL(request.url);
  const filter = url.searchParams.get("filter");
  console.log("filter", filter);

  let textFilter: Prisma.PdfLibraryWhereInput = {};
  if (filter) {
    textFilter = {
      OR: [
        {
          title: {
            contains: filter,
            mode: "insensitive",
          },
        },
        {
          abstract: {
            contains: filter,
            mode: "insensitive",
          },
        },
        {
          pmcid: {
            contains: filter,
            mode: "insensitive",
          },
        },
        {
          pmid: {
            contains: filter,
            mode: "insensitive",
          },
        },
        {
          authors: {
            has: filter,
          },
        },
      ],
    };
  }

  const pdfLibrary = await prisma.pdfLibrary.findMany({
    where: {
      ...textFilter,
    },
  });

  // const pdfLibrary = await getPdfLibrary( textFilter);

  if (!pdfLibrary) {
    throw new Error("pdfLibrary not found");
  }

  return json({ pdfLibrary });
}

export default function KdbIndex() {
  return (
    <div className="mt-15 mb-10 flex h-screen  w-full flex-col items-center justify-center md:flex-row">
      <div className="mt-5 flex h-[24px] w-full flex-col items-center justify-center border-2 border-green-500 md:h-screen md:w-1/5">
        <NavLink to="/kdb/new">add new pdf</NavLink>
      </div>

      <div className="flex h-full w-full flex-col items-center gap-2 overflow-scroll border-2  border-red-500 md:h-screen md:w-4/5">
        <KdbWelcome />
        <PdfList />
      </div>
    </div>
  );
}
