import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/server/prisma.server";

export async function loader({ request }: LoaderArgs) {
  const criteria = await prisma.criterion.groupBy({
    by: ["evidenceType"],
    orderBy: {
      evidenceType: "asc",
    },
  });

  if (!criteria) {
    throw new Error("No Criteria Found");
  }
  const parsedEvidenceTypes = criteria.map((criterion) => {
    const dataEnd = criterion.evidenceType
      .split("_data")
      .join(" Data")
      .split("_")
      .join(" ");
    const formattedEvidenceType = dataEnd
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    return {
      id: Math.random().toString(36).substring(7),
      evidenceType: formattedEvidenceType,
    };
  });

  return json({ parsedEvidenceTypes });
}

export default function CriterionHelpRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div
      className="
flex"
    >
      <h3 className="text-2xl font-bold">Criterion Help</h3>
      <h3 className="text-xl font-bold">Evidence Types</h3>
      <div className="flex flex-col gap-2">
        {data.parsedEvidenceTypes.map((criterion) => {
          return (
            <div key={criterion.id}>
              <h4 className="text-lg font-bold">{criterion.evidenceType}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
