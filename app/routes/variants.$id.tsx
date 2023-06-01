import type { LoaderArgs } from "@remix-run/node";

import { json, redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { prisma } from "~/server/prisma.server";
import { VariantSummaryCard } from "./variants";
import { variants } from "~/acmg-functions-utilities/variants";
export async function loader({ request, params }: LoaderArgs) {
  const id = params.id;

  if (!id) return redirect("/variants");

  const variant = await variants.find((variant) => variant.id === id);

  if (!variant) return redirect("/variants");
  return json({ variant });
}

export default function VariantRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 py-2 md:flex-row">
      <main className="flex flex-1 flex-col items-center gap-2 text-center">
        <h1 className="text-6xl font-bold">Variant</h1>
        <Link to={`/variants/${data.variant.id}/annotate`}>annotate</Link>
        <VariantSummaryCard variant={data.variant} key={data.variant.id} />
      </main>
      <Outlet />
    </div>
  );
}
