import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import type { LoaderArgs } from "@remix-run/node";
import { prisma } from "~/server/prisma.server";
import { Form, useLoaderData } from "@remix-run/react";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import type { Criterion } from "~/constants/acmg-criteria";
import Button from "~/components/button";
import * as Select from "@radix-ui/react-select";

export async function loader({ request, params }: LoaderArgs) {
  const criteria = await prisma.criterion.findMany();
  console.log(criteria, "criteria");

  return json({ criteria });
}
export async function action({ request, params }: ActionArgs) {
  return json({});
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

  const noFunctional = data.criteria.filter(
    (criterion) => criterion.evidenceType !== "Functional Data"
  );
  type Evidence = [
    {
      evidenceType: string;
      criteria: Criterion[];
    }
  ];

  const evidence: Evidence = noFunctional.reduce((acc, criterion) => {
    const { evidenceType } = criterion;

    if (!acc[evidenceType as keyof typeof acc]) {
      acc[evidenceType] = [];
    }
    acc[evidenceType].push(criterion);
    return acc;
  }, [] as any);
  console.log(evidence, "evidence");

  const functionalData = data.criteria.filter(
    (criterion) => criterion.evidenceType === "Functional Data"
  );

  console.log(noFunctional, "noFunctional");
  const [open, setOpen] = React.useState(false);
  const totalWeight = checkedBox.reduce(
    (acc, criterion) => acc + criterion.weight,
    0
  );
  console.log(totalWeight, "totalWeight");

  const columnNames = data.criteria.reduce((acc, criterion) => {
    const { evidenceType } = criterion;

    if (!acc[evidenceType as keyof typeof acc]) {
      acc[evidenceType] = [];
    }
    acc[evidenceType].push(criterion);
    return acc;
  }, [] as Criterion[]);

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
  console.log(checkedBox, "checkedBox");

  // handle select change event
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    console.log(value, "value");

    const [evidenceType, label, weight] = value.split("^");
    setSelected((prev) =>
      prev.filter((criterion) => criterion.evidenceType !== evidenceType)
    );
    setSelected((prev) => [
      ...prev,
      {
        evidenceType,
        label,
        weight: Number(weight),
      },
    ]);

    console.log(selectedOption, "selectedOption");
  };

  console.log(selected, "selected");

  return (
    <>
      <Form method="post" action="/beta" className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <CriteriaSelect
            handleSelectChange={handleSelectChange}
            criterion={population}
            name="population_data"
          />

          <CriteriaSelect
            handleSelectChange={handleSelectChange}
            criterion={deNovo}
            name="de_novo_data"
          />
          <CriteriaSelect
            handleSelectChange={handleSelectChange}
            criterion={alleleData}
            name="allele_data"
          />
          <CriteriaSelect
            handleSelectChange={handleSelectChange}
            criterion={segregationData}
            name="segregation_data"
          />
          <CriteriaSelect
            handleSelectChange={handleSelectChange}
            criterion={otherdata}
            name="other_data"
          />
          <CriteriaSelect
            handleSelectChange={handleSelectChange}
            criterion={computationalData}
            name="computational_data"
          />
          <CriteriaSelect
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

function CriteriaSelect({
  handleSelectChange,
  criterion,
  name,
}: {
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  criterion: Criterion[];
  name: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className=" capitalize" htmlFor="gene">
        {name.split("_").join(" ")}
      </label>
      <select
        name="population_data"
        className="text-black"
        onChange={handleSelectChange}
      >
        {criterion.map((criterion) => (
          <option
            key={criterion.id}
            value={`${criterion.evidenceType}^${criterion.label}^${criterion.weight}`}
          >
            {criterion.label}
          </option>
        ))}
      </select>
    </div>
  );
}
