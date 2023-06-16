import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getFilteredGenes } from "./genes.server";
import GeneSearch from "~/components/gene-search";
import { useLoaderData } from "@remix-run/react";
export async function loader({ request, params }: LoaderArgs) {
  const url = new URL(request.url);
  const filter = url.searchParams.get("filter");
  console.log(filter, "filter");

  const gene = await getFilteredGenes(filter ? filter : "");

  return json({ gene });
}

export default function GenesRoute() {
  const data = useLoaderData<typeof loader>();
  console.log(data);

  return (
    <div>
      <h1>Genes</h1>
      <GeneSearch />
    </div>
  );
}
