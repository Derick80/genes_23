import { Criterion } from "@prisma/client";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Item } from "@radix-ui/react-select";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useFetcher,
  useLoaderData,
  useMatches,
  useParams,
} from "@remix-run/react";
import { log } from "console";
import React from "react";
import { textFormat, useMatchesData } from "~/functions";
import { prisma } from "~/server/prisma.server";

export const radios = [
  {
    option: "Very Strong",
  },
  {
    option: "Strong",
  },
  {
    option: "Moderate",
  },
  {
    option: "Supporting",
  },
  {
    option: "Stand alone",
  },
];
export async function loader({ request }: LoaderArgs) {
  const searchParam =
    new URLSearchParams(request.url.split("?")[1]).get("searchParam") || "";
  console.log(searchParam, "searchParam");

  const criterion = await prisma.criterion.findMany({
    where: {
      evidenceType: {
        contains: searchParam,
      },
    },
    orderBy: {
      evidenceType: "asc",
    },
  });

  const criteria = await prisma.criterion.findMany({
    orderBy: {
      evidenceType: "asc",
    },
  });

  return json({ criteria, criterion });
}

export type CriterionLoaderData = {
  groups: {
    [key: string]: {
      id: string;
      criterionName: string;
      definition: string;
      evidenceType: string;
      example: string;
      criterionBaseWeight: string;
      caveat: string;
    }[];
  }[];
};

export default function Criterio() {
  const data = useLoaderData<typeof loader>();

  const columnNames = data.criterion.reduce(
    (acc: string[], cur: typeof data.criterion[0]) => {
      if (!acc.includes(cur.evidenceType)) {
        acc.push(cur.evidenceType);
      }
      return acc;
    },
    [] as string[]
  );

  console.log(columnNames, "columnNames");

  return (
    <div className="flex min-h-screen w-full flex-col p-1">
      <div className="flex flex-col gap-2">
        <Outlet />
        <h1 className="text-2xl font-bold">Documentation</h1>

        <p className="text-gray-500">
          This page is a work in progress. Please check back later for more
          information.
        </p>
        <p className="text-gray-500">
          Individual Criterion are grouped by Evidence Type. Click on the
          Evidence Type to see the Criterion.
        </p>
        <p className="text-gray-500">
          To Edit a Criterion, click on the Criterion Name.
        </p>

        <div className="flex flex-col gap-2 p-1">
          {columnNames.map((column) => {
            return (
              <div
                key={column}
                className="items-cener flex w-full flex-col gap-2"
              >
                <div className="flex flex-row gap-2">
                  <ColumnFetcher searchParam={column} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ColumnFetcher({ searchParam }: { searchParam: string }) {
  const matches = useMatches();

  const criterion = matches.find((match) => match.pathname === "/criterion")
    ?.data.criterion as Criterion[];

  const byGROUP = criterion?.filter((criterion) => {
    return criterion.evidenceType === searchParam;
  }) as Criterion[];  

  console.log(byGROUP, "byGROUP");

  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`flex w-full flex-col gap-2 p-1 ${
        open ? "rounded-md border border-gray-500" : "rounded-md border"
      }`}
    >
      <div  className="flex flex-row items-center gap-2">
        <h3 className="text-xl font-bold">{textFormat(searchParam)}</h3>
        <button
          className="flex flex-row items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </div>

      {open ? (
        <div className="flex flex-col gap-2 p-1">
          {byGROUP?.map((criterion) => {
            return (
              <div key={criterion.id} className="flex flex-col gap-2">
                <Link to={`/criterion/${criterion.id}`}>
                  <h3 className="text-xl font-bold">
                    {criterion.criterionName}
                  </h3>
                </Link>
                <div className="flex flex-row gap-2">
                  <FormatDefinnition definition={criterion.definition} />
                </div>

                {criterion.example ? (
                  <div className="flex flex-row gap-2">
                    <p className="text-gray-500">
                      {" "}
                      Example: {criterion.example}
                    </p>
                  </div>
                ) : null}

                {criterion.caveat ? (
                  <div className="flex flex-row gap-2">
                    <p className="text-gray-500"> Caveat: {criterion.caveat}</p>
                  </div>
                ) : null}

                {criterion.criterionBaseWeight ? (
                  <div className="flex flex-row gap-2">
                    <p className="text-gray-500">
                      Criterion Base Weight: {criterion.criterionBaseWeight}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function FormatDefinnition({ definition }: { definition: string }) {
  function sortMe(definition: string) {
    const toString = definition.toString();

    const formattedDef = toString
      .replace(`P:`, "Supporting: ")
      .replace(`VS:`, "Strong: ")
      .replace(`M:`, "Moderate: ")
      .replace(`S:`, "Strong: ")
      .replace(`SA: `, "Stand alone:");

    return formattedDef;
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-500">Definition: {sortMe(definition)}</p>
    </div>
  );
}
