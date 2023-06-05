/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { extractFirstTwoLetters } from "~/acmg-functions-utilities/acmg-criteria";
import { convertToNumbers } from "~/acmg-functions-utilities/acmg-criteria";
import type { ListCriteriaUsed } from "~/routes/calculator/route";

type Props = {
  data: ListCriteriaUsed;
  setClassificationScore: React.Dispatch<React.SetStateAction<number>>;
  setVariantClassification: React.Dispatch<React.SetStateAction<string>>;
};
export default function ClassificationComponent({
  data,
  setClassificationScore,
  setVariantClassification,
}: Props) {
  // calculate the subtotal of the weights of the criteria used
  const [subtotals, setSubtotals] = React.useState<number>(0);
  const subtotal = data.reduce((acc, item) => {
    return acc + item.weight;
  }, 0);

  const criteriaBreakdown = extractFirstTwoLetters(
    data.map((item) => {
      return item.label;
    })
  );

  const transformed = convertToNumbers(criteriaBreakdown);


  React.useEffect(() => {
    setClassificationScore(subtotal);
    setSubtotals(subtotal);
    setVariantClassification(transformed.classification);
  }, [subtotal, setClassificationScore, setVariantClassification, transformed]);

  return (
    <div className="order-first flex w-full flex-col gap-2 rounded-md border-2 p-1 md:order-none md:w-1/3">
      <div className="flex items-center justify-between">
        <div className="text-white">Classification Score</div>
        <div className="text-white">{subtotals}</div>
      </div>
   
      <div className="flex flex-col items-center justify-between">
        <div className="text-white">Variant Classification</div>
        <div className="text-white">{transformed.classification}</div>
      </div>
    </div>
  );
}
