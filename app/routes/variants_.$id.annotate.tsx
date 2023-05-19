import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";

import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { log } from "console";
import React from "react";
import { set } from "zod";
import Button from "~/components/button";
import Select from "~/components/test-select";
import BayesTable from "~/constants/bayes-table";
import { criteria, scoreMatrix } from "~/constants/consts";

export async function loader({ request, params }: LoaderArgs) {
  const id = params.id;
  if (!id) return redirect("/variants");

  const populationData = criteria.find(
    (criteria) => criteria.name === "Population"
  );
  const functionalData = criteria.find(
    (criteria) => criteria.name === "Functional"
  );
  const proteinData = criteria.find((criteria) => criteria.name === "Protein");
  const reputableSourceData = criteria.find(
    (criteria) => criteria.name === "ReputableSource"
  );
  const caseLevelData = criteria.find(
    (criteria) => criteria.name === "CaseLevel"
  );

  return json({
    populationData,
    functionalData,
    proteinData,
    reputableSourceData,
    caseLevelData,
  });
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
  const [criterias, setCriterias] = React.useState<string[]>([]);
  const [totals, setTotals] = React.useState<number>(0);
  const [classification, setClassification] =
    React.useState<string>("No classification");
const [dropdown, setDropdown] = React.useState(false);
 const optionsRef = React.useRef<HTMLOptionElement>(null);
 const [reset, setReset] = React.useState(false);

 const formRef = React.useRef<HTMLFormElement>(null);
const calculatorRef = React.useRef<HTMLDivElement>(null);
React.useEffect(() => {
  if(reset){
    formRef.current?.reset()
   
  }
}, [reset])



  // create a function to handle the choices from the select boxes
  function handleChoices(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    // subcategory is the first letter of the value Benign = B or Pathogenic = P
    const subcategory = value.substring(0, 1);

    // score is the last letter of the value and corresponds to the bayes score from Tavtigian et al 2020
    const score = Number(value.slice(-1));

    // shortenedEvidenceType is the first 3 letters of the name of the EvidenceType eg Population = pop
    const shortenedEvidenceType = name.split(" ")[0];
    //  combo is the shortenedEvidenceType, subcategory and score eg pop B 1

    const newCriteria = [...criterias];

    // if the newCriteria array already contains a value that starts with the shortenedEvidenceType eg pop B 1 then replace that value with the new combo value
    if (
      newCriteria.some((criteria) => criteria.startsWith(shortenedEvidenceType))
    ) {
      const index = newCriteria.findIndex((criteria) =>
        criteria.startsWith(shortenedEvidenceType)
      );
      newCriteria[index] =
        shortenedEvidenceType + "_" + subcategory + "_" + score;
    } else {
      // if the newCriteria array does not contain a value that starts with the shortenedEvidenceType eg pop B 1 then add the combo value to the newCriteria array
      newCriteria.push(shortenedEvidenceType + "_" + subcategory + "_" + score);
    }
    // set the criterias state to the newCriteria arrayå

    setCriterias(newCriteria);
    console.log(newCriteria, "newCriteria");

    // sum the total score from the newCriteria array and set the total state to the sum of the array which corresponds to the total bayes score and set the classification state to the classification name eg Benign
    const trimmedCriteria = newCriteria.map((criteria) => criteria.slice(-3));
    console.log(trimmedCriteria, "trimmedCriteria");

    const subTotal = getNumbers(trimmedCriteria);
    const total = subTotal.reduce((a, b) => a + b, 0);
    console.log(total, "total");
    setTotals(total);

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

  const handleClickOutside= (event:MouseEvent): void => {
    if(optionsRef.current && !optionsRef.current.contains(event.target as Node)){
      setDropdown(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('mouseleave', handleClickOutside)
    return () => {
      document.removeEventListener('mouseleave', handleClickOutside)
    }
  }, [])
  

  return (
    <div className="flex min-h-screen flex-col  p-2">
      <div
      ref={calculatorRef}
      
      className="flex w-full flex-col items-center gap-1">
        <h3

        className="text-2xl font-bold">ACMG Classification</h3>
        <p className="text-xl font-bold"> {criterias}</p>
        <p className="text-xl font-bold">
          Total Score: {totals !== 0 ? totals : 0}
        </p>
        <p className="text-xl font-bold">Classification: {classification}</p>
      </div>
      <div className="flex w-full flex-row items-center gap-1">
        <BayesTable />

        <Form
        id='form'
          ref={formRef}
        method="post" className="flex w-1/2 flex-col gap-1">
          {criteria.map((population) => (
            <>
              <label
                className="text-left font-semibold capitalize"
                key={population.id}
              >
                {population.name}
              </label>

              <select
            data-state={dropdown}
              id='select'
                title={population.name}
                className="rounded-md border border-gray-300 text-black"
                key={population.id}
                name={population.name}
                onChange={handleChoices}
              >
                {population.strength.map((strength) => (
                  <option

                  ref={optionsRef}
                  data-category-type={strength.value.slice(0, 1)}
                  data-etype={population.name}
                    placeholder="Pick a Criterion"
                    key={strength.id}
                    value={strength.value}
                    defaultChecked={false}
                  >
                    {strength.label}
                  </option>
                ))}
              </select>
            </>
          ))}
         <div className="flex w-full flex-row items-center gap-1">
         <Button
          variant="primary_filled"
          size='base'
            type="submit"
          >
            Submit
          </Button>
          <Button 
           variant="warning_filled"
           size='base'
            type='button'
          onClick={() => setReset(!reset)}>Reset</Button>
          </div>

        </Form>
      </div>

    </div>

  );
}

function getNumbers(trimmedCriteria: string[]) {
  const myArray = [] as number[];
  trimmedCriteria.forEach((criteria) => {
    if (criteria.startsWith("B")) {
      const number = -Number(criteria.slice(-1));
      myArray.push(number);
    } else if (criteria.startsWith("P")) {
      const number = Number(criteria.slice(-1));
      myArray.push(number);
    }
  });
  return myArray;
}


