import { Form, useLoaderData } from "@remix-run/react";
import React from "react";
import { loader } from "~/routes/omega";
import RadixSelect from "./radix-select";
import CustomCriteriaSelect from "./my-custom-select";
import CheckBoxes from "./my-custom-radix-checkbox";
import CustomCriteriaCheckBox from "./my-custom-radix-checkbox";
import ClassificationComponent from "./classification-component";

export type ListCriteriaUsed = {
  evidenceType: string;
  label: string;
  weight: number;  
}[];

export type ClassificatonScore = number;

export default function OmegaUi() {
  const { functionalData, criteria, allDataByEvidenceType } =
    useLoaderData<typeof loader>();
  //  I want to create a react state array that will hold the label of the criterion which corresponds to the ACMG evidence Code.  The array will be grouped by evidenceType so that updating the state array can be done in complex ways

  const [listCriteriaUsed, setListCriteriaUsed] =
    React.useState<ListCriteriaUsed>([]);

  console.log(listCriteriaUsed, "listCriteriaUsed");
const [classificationScore, setClassificationScore] 
= React.useState<ClassificatonScore>(0)
const [variantClassification, setVariantClassification] = React.useState<string>("")
  const handleListCriteriaUsed = (value: string, evidenceType: string, weight:number) => {
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
            return { evidenceType, label: value , weight};
          }
          return item;
        });
      });
    }
  };
const handleCheckBoxListCriteriaUsed = (value: string, evidenceType: string,weight:number) => {
    const isPresent = listCriteriaUsed.some((item) => {
      return item.label === value;
    }
    )
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
    <div className="flex flex-col items-center justify-center">
    <p className="text-2xl">Variant Classification: {variantClassification}</p>
    <p className="text-2xl">Classification Score: {classificationScore}</p>
      <ClassificationComponent data={listCriteriaUsed} setClassificationScore={setClassificationScore}
      setVariantClassification={setVariantClassification}
      />
    <Form method="post" className="">
      <CustomCriteriaSelect
        setListCriteriaUsed={setListCriteriaUsed}
        handleListCriteriaUsed={handleListCriteriaUsed}
        data={allDataByEvidenceType }
        options={criteria}
      />

      <CustomCriteriaCheckBox
        handleCheckBoxListCriteriaUsed={handleCheckBoxListCriteriaUsed}
        data={functionalData}
      />
      <button type="submit">Submit</button>
    </Form>
    </div>
  );
}
