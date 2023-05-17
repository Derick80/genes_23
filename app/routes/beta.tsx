import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

import { ActionArgs, LoaderArgs, json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { criteria } from "~/constants/consts";
import { getACMGClassification } from "~/server/functions.server";

export async function loader({ request }: LoaderArgs) {
  return json({ criteria });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const population = formData.get("population");
  const functional = formData.get("functionalComputational");
  const protein = formData.get("protein");
  const reputableSource = formData.get("reputableSource");
  const caseLevel = formData.get("caseLevel");

  const data = Object.fromEntries(formData.entries()) as Record<string, string>;
  console.log(data, "data");
  // Use the following function to calculate the total classification
  const totals = await getACMGClassification(data);
  console.log(totals, "totals");
  return json({ message: "updated" });
}
export default function BetaRoute() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
        <Form method="post" className="flex flex-col gap-2">
          {criteria.map((population) => (
            <>
              <label className="text-left capitalize" key={population.id}>
                {population.name}
              </label>

              <select
                title={population.name}
                className="rounded-md border border-gray-300 text-black"
                key={population.id}
                name={population.name}
              >
                {population.strength.map((strength) => (
                  <option
                    key={strength.value}
                    value={strength.value}
                    defaultValue={strength.value[0]}
                  >
                    {strength.label}
                  </option>
                ))}
              </select>
            </>
          ))}
          <button
            className="rounded-md bg-blue-500 p-2 text-white"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </main>
    </div>
  );
}
