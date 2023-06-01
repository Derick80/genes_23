import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Outlet, useLoaderData } from "@remix-run/react";

import { prisma } from "~/server/prisma.server";
import React from "react";
import ClassificationComponent from "~/components/criteria-components/classification-component";
import CustomCriteriaCheckBox from "~/components/criteria-components/my-custom-radix-checkbox";
import CustomCriteriaSelect from "~/components/criteria-components/my-custom-select";
import Documentation from "./calculator-documentation";

export type ListCriteriaUsed = {
  evidenceType: string;
  label: string;
  weight: number;
}[];

export type ClassificatonScore = number;
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
    acc[evidenceType].push({ label, id, evidenceType, definition, weight });
    return acc;
  }, {} as Record<string, { label: string; id: string; evidenceType: string; definition: string; weight: number }[]>);

  // extract the functional data from the byEvidenceType object

  return json({ functionalData, allDataByEvidenceType, criteria });
}

export async function action({ request, params }: ActionArgs) {
  return json({
    message: "success",
  });
}

export default function CalculatorRoute() {
  const { functionalData, criteria, allDataByEvidenceType } =
    useLoaderData<typeof loader>();
  const [listCriteriaUsed, setListCriteriaUsed] =
    React.useState<ListCriteriaUsed>([]);

  const [classificationScore, setClassificationScore] =
    React.useState<ClassificatonScore>(0);
  const [variantClassification, setVariantClassification] =
    React.useState<string>("");

  const calculatorRef = React.useRef<HTMLDivElement>(null);
  const handleListCriteriaUsed = (
    value: string,
    evidenceType: string,
    weight: number
  ) => {
    const index = listCriteriaUsed.findIndex((item) => {
      return item.evidenceType === evidenceType;
    });
    if (index === -1) {
      setListCriteriaUsed((prev) => {
        return [...prev, { evidenceType, label: value, weight }];
      });
    } else {
      setListCriteriaUsed((prev) => {
        return prev.map((item) => {
          if (item.evidenceType === evidenceType) {
            return { evidenceType, label: value, weight };
          }
          return item;
        });
      });
    }
  };
  const handleCheckBoxListCriteriaUsed = (
    value: string,
    evidenceType: string,
    weight: number
  ) => {
    const isPresent = listCriteriaUsed.some((item) => {
      return item.label === value;
    });
    if (isPresent) {
      setListCriteriaUsed((prev) => {
        return prev.filter((item) => {
          return item.label !== value;
        });
      });
    } else {
      setListCriteriaUsed((prev) => {
        return [...prev, { evidenceType, label: value, weight }];
      });
    }
  };

  return (
    <div className="itesms-center justify-cesnter mb-10 mt-10 flex flex-col gap-2 md:flex-row">
      <Form method="post" className="w-full rounded-md border-2 p-1 md:w-1/3 ">
        <CustomCriteriaSelect
          handleListCriteriaUsed={handleListCriteriaUsed}
          data={allDataByEvidenceType}
          options={criteria}
        />

        <CustomCriteriaCheckBox
          handleCheckBoxListCriteriaUsed={handleCheckBoxListCriteriaUsed}
          data={functionalData}
        />
        <button type="submit">Submit</button>
      </Form>
      <ClassificationComponent
        data={listCriteriaUsed}
        setClassificationScore={setClassificationScore}
        setVariantClassification={setVariantClassification}
      />
      <Documentation />
      <Outlet />
    </div>
  );
}
