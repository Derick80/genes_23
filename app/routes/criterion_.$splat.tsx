import { useAuth } from "@clerk/remix";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import * as Label from "@radix-ui/react-label";

import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import Button from "~/components/button";
import { validateAction } from "~/functions";
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

const schema = z.object({
  criterionName: z.string(),
  definition: z.string(),
  evidenceType: z.string(),
  example: z.string(),
  criterionBaseWeight: z.string(),
  caveat: z.string(),
});

type ActionInput = z.infer<typeof schema>;
export async function action({ request, params }: ActionArgs) {
  const criterionId = params.splat;
  const userId = useAuth;
  if (!userId) {
    return redirect("/sign-in");
  }

  const { formData, errors } = await validateAction({ request, schema });

  if (errors) {
    return json({ errors });
  }
  const {
    criterionName,
    definition,
    evidenceType,
    example,
    criterionBaseWeight,
    caveat,
  } = formData as ActionInput;

  const updated = await prisma.criterion.update({
    where: {
      id: criterionId,
    },
    data: {
      label: criterionName,
      definition,
      evidenceType,
      example,
      criterionBaseWeight,
      caveat,
    },
  });

  if (updated) {
    return redirect("/criterion");
  }
}
export default function EditIndex() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 py-2">
      <Form
        className="flex w-full max-w-2xl flex-col gap-2 rounded-md border p-4  "
        method="post"
      >
        <Label.Root
          className="text-xl font-bold text-white"
          htmlFor="criterionName"
        >
          Criterion Name
        </Label.Root>
        <input
          className="rounded-md border-2 border-gray-400 p-2 text-black"
          type="text"
          name="criterionName"
          id="criterionName"
          placeholder="criterionName"
          defaultValue={data.criterion[0].label}
        />
        <div className="flex flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="definition">
            Definition
          </label>
          <input
            className="rounded-md border-2 border-gray-400 p-2 text-black"
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
            className="rounded-md border-2 border-gray-400 p-2 text-black"
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
            className="rounded-md border-2 border-gray-400 p-2 text-black"
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
            className="rounded-md border-2 border-gray-400 p-2 text-black"
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
            className="rounded-md border-2 border-gray-400 p-2 text-black"
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
