import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import OmegaUi from "~/components/criteria-components/omega-route-ui";
import { prisma } from "~/server/prisma.server";

export async function loader({ request, params }: LoaderArgs) {
  const criteria = await prisma.criterion.findMany();

  const functionalData = criteria.filter((item) => {
    return item.evidenceType === "Functional Data";
  });
  const allOtherData = criteria.filter((item) => {
    return item.evidenceType !== "Functional Data";
  });

  //  I want to group the criteria by evidenceType so that updating the state array can be done in complex ways

  const allDataByEvidenceType = allOtherData.reduce((acc, item) => {
    const { evidenceType, label, id, definition, weight } = item;
    if (!acc[evidenceType]) {
      acc[evidenceType] = [];
    }
    acc[evidenceType].push({ label, id, evidenceType, definition,weight });
    return acc;
  }, {} as Record<string, { label: string; id: string; evidenceType: string; definition: string,weight:number }[]>);

  console.log(allDataByEvidenceType, "allDataByEvidenceType");

  // extract the functional data from the byEvidenceType object

  return json({ functionalData, allDataByEvidenceType, criteria });
}

export async function action({ request, params }: ActionArgs) {
  return json({
    message: "success",
  });
}

export default function OmegaRoute() {
  return (
    <div className="mb-10 mt-10 flex h-full w-full flex-col items-center justify-center">
      <OmegaUi />
    </div>
  );
}
