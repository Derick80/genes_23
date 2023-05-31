import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import type { LoaderArgs } from "@remix-run/node";
import { prisma } from "~/server/prisma.server";
import { Form, useLoaderData } from "@remix-run/react";
import React from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import type { Criterion } from "~/constants/acmg-criteria";
import Button from "~/components/button";
import { set } from "zod";

export async function loader({ request, params }: LoaderArgs) {
  const criteria = await prisma.criterion.findMany();

  return json({ criteria });
}
export async function action({ request, params }: ActionArgs) {
  const formData = await request.formData();

  console.log(Object.fromEntries(formData), "formData");

  const population = formData.get("population_data") as string;
  const functional = formData.get("functional_data");
  const deNovo = formData.get("de_novo_data");
  const allele = formData.get("allele_data");
  const segregation = formData.get("segregation_data");
  const other = formData.get("other_data");
  const computational = formData.get("computational_data");

  function getCriteria(item: string) {
    const [evidenceType, label, weight] = item.split("^");
    return {
      label,
    };
  }
  const pop = getCriteria(population);
  console.log(pop, "pop");

  return json({
    message: "success",
  });
}

type CriterionGroup = {
  evidenceType: string;
  label: string;
  weight: number;
};
export default function Beta() {
  const data = useLoaderData<typeof loader>();
  const [checkedBox, setCheckedBox] = React.useState<CriterionGroup[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<string>("");
  const [selected, setSelected] = React.useState<
    { evidenceType: string; label: string; weight: number }[]
  >([]);

  const functionalData = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Functional Data"
  );

  const [open, setOpen] = React.useState(false);

  const bothArrays = [...selected, ...checkedBox];
  console.log(bothArrays, "bothArrays");

  const total = bothArrays.reduce((acc, curr) => {
    return acc + curr.weight;
  }, 0);

  const [classification, setClassification] = React.useState<string>("");

  function getClassificatin(total: number) {
    if (total <= -7) {
      setClassification("Benign");
    } else if (total >= -6 && total <= -1) {
      setClassification("Likely Benign");
    } else if (total >= 0 && total <= 5) {
      setClassification("Uncertain Significance");
    } else if (total >= 6 && total <= 9) {
      setClassification("Likely Pathogenic");
    } else if (total >= 10) {
      setClassification("Pathogenic");
    } else {
      setClassification("No Classification");
    }
  }

  React.useEffect(() => {
    getClassificatin(total);
  }, [total]);

  console.log(classification, "classification");

  const population = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Population Data"
  );
  const deNovo = data.criteria.filter(
    (criterion) => criterion.evidenceType === "De Novo Data"
  );
  const alleleData = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Allelic Data"
  );
  const segregationData = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Segregation Data"
  );
  const otherdata = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Other Data"
  );
  const computationalData = data.criteria.filter(
    (criterion) =>
      criterion.evidenceType === "Computational and Predictive Data"
  );
  const otherdb = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Other Database"
  );

  // handle checkbox change event
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const [evidenceType, label, weight] = value.split("^");

    if (checked) {
      setCheckedBox((prev) => [
        ...prev,
        {
          evidenceType,
          label,
          weight: Number(weight),
        },
      ]);
    } else {
      setCheckedBox((prev) =>
        prev.filter((criterion) => criterion.label !== label)
      );
    }
  };

  // handle select change event
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    const [evidenceType, label, weight] = value.split("^");
    if (evidenceType === "") {
      return;
    }
    setSelected((prev) =>
      prev.filter((criterion) => criterion.evidenceType !== evidenceType)
    );
    setSelected((prev) => [
      ...prev,
      {
        evidenceType,
        label,
        weight: Number(weight) || 0,
      },
    ]);
  };

  // test stuff
  const evidenceTypes = Array.from(
    new Set(data.criteria.map((c) => c.evidenceType))
  );
  console.log(evidenceTypes, "evidenceTypes");

  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <p className="text-2xl font-bold">ACMG Variant Classification:</p>
        {classification}
      </div>

      <Form method="post" action="/beta" className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <CSelect
            handleSelectChange={handleSelectChange}
            criterion={population}
            name="population_data"
          />

          <CSelect
            handleSelectChange={handleSelectChange}
            criterion={deNovo}
            name="de_novo_data"
          />
          <CSelect
            handleSelectChange={handleSelectChange}
            criterion={alleleData}
            name="allele_data"
          />
          <CSelect
            handleSelectChange={handleSelectChange}
            criterion={segregationData}
            name="segregation_data"
          />
          <CSelect
            handleSelectChange={handleSelectChange}
            criterion={otherdata}
            name="other_data"
          />
          <CSelect
            handleSelectChange={handleSelectChange}
            criterion={computationalData}
            name="computational_data"
          />
          <CSelect
            handleSelectChange={handleSelectChange}
            criterion={otherdb}
            name="other_db"
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <h3 className="capitalize">functional data</h3>
              <button type="button" onClick={() => setOpen(!open)}>
                {open ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
            </div>
            {open &&
              functionalData.map((criterion) => (
                <label key={criterion.id} className="capitalize">
                  <input
                    type="checkbox"
                    name={criterion.evidenceType}
                    value={`${criterion.evidenceType}^${criterion.label}^${criterion.weight}`}
                    onChange={handleCheckboxChange}
                  />
                  {criterion.label}
                </label>
              ))}
          </div>
        </div>

        <Button variant="primary_filled" size="base" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

// function CriteriaSelect({
//   handleSelectChange,
//   criterion,
//   name,
// }: {
//   handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   criterion: Criterion[];
//   name: string;
// }) {
//   return (
//     <div className="flex flex-col gap-2">
//       <label className=" capitalize" htmlFor="gene">
//         {name.split("_").join(" ")}
//       </label>
//       <select name={name} className="text-black" onChange={handleSelectChange}>
//         {criterion.map((criterion) => (
//           <option
//             key={criterion.id}
//             value={`${criterion.evidenceType}^${criterion.label}^${criterion.weight}`}
//           >
//             {criterion.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
function CSelect({
  handleSelectChange,
  criterion,
  name,
}: {
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  criterion: Criterion[];
  name: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div className="flex flex-col gap-2 rounded-md">
      <div className="flex gap-1">
        <label className=" capitalize" htmlFor="gene">
          {name.split("_").join(" ")}
        </label>
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? (
            <ChevronUpIcon className="h-6 w-6" />
          ) : (
            <ChevronDownIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div className="relative ">
        {value}

        <input type="hidden" name={name} value={value} />
        <button
          type="button"
          onClick={(e) => {
            handleSelectChange(
              e as unknown as React.ChangeEvent<HTMLSelectElement>
            );
            setOpen(false);
          }}
          className="abg-red-500 h-6 w-6 rounded-full text-white"
        >
          {value === "" ? "" : <Cross2Icon />}
        </button>
        {open && (
          <div className="absolute z-10 w-full bg-white">
            <ul className="flex flex-col gap-2">
              {criterion.map((criterion) => (
                <>
                  <li key={criterion.id} className="capitalize text-black">
                    <button
                      type="button"
                      value={`${criterion.evidenceType}^${criterion.label}^${criterion.weight}`}
                      className={value === criterion.label ? "bg-blue-100" : ""}
                      onClick={(e) => {
                        const { value } = e.currentTarget;
                        const [evidenceType, label, weight] = value.split("^");
                        setValue(value);
                        handleSelectChange(
                          e as unknown as React.ChangeEvent<HTMLSelectElement>
                        );
                        setOpen(false);
                      }}
                    >
                      {criterion.label}
                    </button>
                  </li>
                </>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
