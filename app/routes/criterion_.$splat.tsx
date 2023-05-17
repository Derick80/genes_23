import type { LoaderArgs } from "@remix-run/node";

import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import { prisma } from "~/server/prisma.server";
export async function loader({ request, params }: LoaderArgs) {
  const searchParam = params.splat || "";
  console.log(searchParam, "searchParam");
  const formattedsearchParam = searchParam
    .split(" ")
    .join("_")
    .split("_Data")
    .join("_data")
    .toLowerCase();

  console.log(formattedsearchParam, "formattedsearchParam");

  const criterion = await prisma.criterion.findMany({
    where: {
      OR: [
        {
          evidenceType: {
            contains: formattedsearchParam,
          },
        },
        {
          id: {
            contains: formattedsearchParam,
          },
        },
      ],
    },

    orderBy: {
      evidenceType: "asc",
    },
  });

  console.log(criterion, "criterion");

  return json({ criterion, searchParam });
}

export default function EditIndex() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 py-2">
      <Form
        className="flex w-full max-w-2xl flex-col gap-2 rounded-md border p-4 "
        method="post"
      >
        <label className="text-xl font-bold" htmlFor="criterionName">
          Criterion Name
        </label>
        <input
          type="text"
          name="criterionName"
          id="criterionName"
          placeholder="criterionName"
          defaultValue={data.criterion[0].criterionName}
        />
        <div className="flex flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="definition">
            Definition
          </label>
          <input
            type="text"
            name="definition"
            id="definition"
            placeholder="definition"
            defaultValue={data.criterion[0].definition}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="evidenceType">
            Evidence Type
          </label>
          <input
            type="text"
            name="evidenceType"
            id="evidenceType"
            placeholder="evidenceType"
            defaultValue={data.criterion[0].evidenceType}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="example">
            Example
          </label>
          <input
            type="text"
            name="example"
            id="example"
            placeholder="...example"
            defaultValue={data.criterion[0].example || ""}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="criterionBaseWeight">
            Criterion Base Weight
          </label>
          <select
            name="criterionBaseWeight"
            id="criterionBaseWeight"
            defaultValue={data.criterion[0].criterionBaseWeight}
          >
            <option value="P">Supporting</option>
            <option value="M">Moderate</option>
            <option value="S">Strong</option>
            <option value="VS">Very Strong</option>
            <option value="SA">Stand Alone</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="caveat">
            Caveat
          </label>
          <input
            type="text"
            name="caveat"
            id="caveat"
            defaultValue={data.criterion[0].caveat || ""}
            onChange={(e) => {
              console.log(e.target.value, "e.target.value");
            }}
          />
        </div>
        <Button variant="warning_filled" size="large" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
