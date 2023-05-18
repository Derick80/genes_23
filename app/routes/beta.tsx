import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

import { ActionArgs, LoaderArgs, json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import clsx from "clsx";
import React from "react";
import SelectBox from "~/components/select-box";
import BayesTable from "~/constants/bayes-table";
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

  const scoreMatrix = [
    {
      name: 'Benign',
      score:[-7,-100]
    },
    {
      name: 'Likely Benign',
      score:[-1,-6]
    },
    {
      name: 'Uncertain Significance',
      score:[0,5]
    },
    {
      name: 'Likely Pathogenic',
      score:[6,9]
    },
    {
      name: 'Pathogenic',
      score:[10,100]
    },

  ]

  const [criterias, setCriterias] = React.useState<string[]>([]);
  const [totals, setTotals] = React.useState<number>(0);
  const [classification, setClassification] = React.useState<string>('No classification');

  function handleChoices(event: React.ChangeEvent<HTMLSelectElement>) {

    const { name, value } = event.target;
    // subcategory is the first letter of the value Benign = B or Pathogenic = P
    const subcategory = value.substring(0, 1);
      
    // score is the last letter of the value and corresponds to the bayes score from Tavtigian et al 2020
  const score = subcategory === 'B' ? Number(value.slice(-1))*-1 : Number(value.slice(-1))

    // shortenedEvidenceType is the first 3 letters of the name of the EvidenceType eg Population = pop
    const shortenedEvidenceType = name.split(' ')[0];
    //  combo is the shortenedEvidenceType, subcategory and score eg pop B 1
    const combo = `${name} ${value} ${score}`
      
    const newCriteria =[...criterias]
    
    // if the newCriteria array already contains a value that starts with the shortenedEvidenceType eg pop B 1 then replace that value with the new combo value
    if(newCriteria.some((criteria) => criteria.startsWith(shortenedEvidenceType))) {
      const index = newCriteria.findIndex((criteria) => criteria.startsWith(shortenedEvidenceType))
      newCriteria[index] = shortenedEvidenceType + ' ' + subcategory  + score
    }else {
      // if the newCriteria array does not contain a value that starts with the shortenedEvidenceType eg pop B 1 then add the combo value to the newCriteria array
      newCriteria.push(combo)
    }
    // set the criterias state to the newCriteria array

    setCriterias(newCriteria);
    console.log(newCriteria, 'newCriteria');
    
    // sum the total score from the newCriteria array and set the total state to the sum of the array which corresponds to the total bayes score and set the classification state to the classification name eg Benign
    const total = newCriteria.reduce((acc, curr) => {
      const score = Number(curr.slice(-2))


      
      return acc + Number(curr.slice(-2)
      )
    }, 0)
    setTotals(total)
    // find the classification name from the scoreMatrix array that corresponds to the total score
    const classification = scoreMatrix.find((score) => {
      const [min, max] = score.score
      return total >= min && total <= max
    })
    if(classification) {
      setClassification(classification.name)
    }else {
      setClassification('No classification')
    }
  }
  
  
  
 
  
  return (
    <div className="flex min-h-screen flex-col  p-2">

       <div className="flex flex-col gap-1 w-full items-center">
       <h3 className="text-2xl font-bold">ACMG Classification
         
        </h3>
        <p className="text-xl font-bold"> {criterias}</p>
        <p className="text-xl font-bold">Total Score: {totals !== 0 ?
        totals :
        0
        }</p>
        <p className="text-xl font-bold">Classification: {classification}</p>
        </div>
<div className="flex flex-row gap-1 w-full items-center">
  <BayesTable />
  
        <Form method="post" className="flex w-1/2 flex-col gap-1">
          {criteria.map((population) => (
            <>
              <label className="text-left capitalize font-semibold" key={population.id}>
                {population.name}
              </label>

            {/* <SelectBox population={population}
            handleChoices={handleChoices}
            /> */}

              <select
                title={population.name}
                className="rounded-md border border-gray-300 text-black"
                key={population.id}
                name={population.name}
                onChange={handleChoices}
              >
                {population.strength.map((strength) => (
                  <option
                  ref={React.createRef()}
                    placeholder="Pick a Criterion"
                    key={strength.value}
                    value={strength.value}
                    defaultChecked={false}
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
        </div>
    </div>
  );
}
