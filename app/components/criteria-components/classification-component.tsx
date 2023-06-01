import React from "react";
import { ListCriteriaUsed } from "./omega-route-ui";
import { extractFirstTwoLetters } from "~/constants/acmg-criteria";
import { convertToNumbers } from "~/constants/acmg-criteria";


type Props ={
    data: ListCriteriaUsed;
    setClassificationScore: React.Dispatch<React.SetStateAction<number>>;
    setVariantClassification: React.Dispatch<React.SetStateAction<string>>;
}
export default function ClassificationComponent({data, setClassificationScore,setVariantClassification}:Props) {
    // calculate the subtotal of the weights of the criteria used
    const [subtotals, setSubtotals] = React.useState<number>(0);
    const subtotal = data.reduce((acc, item) => {
        return acc + item.weight;
    }, 0);
    console.log(subtotal, "subtotal");
   
    const criteriaBreakdown = extractFirstTwoLetters(data.map((item) => {
        return item.label;
    }));
    console.log(criteriaBreakdown, "criteriaBreakdown");
    
    const transformed = convertToNumbers(criteriaBreakdown);
   
    React.useEffect(() => {
        setClassificationScore(subtotal)
        setSubtotals(subtotal)
        setVariantClassification(transformed.classification)
        
    }, [subtotal, setClassificationScore])

  return (
    <div
className=''
>
      
    </div>
  );
}