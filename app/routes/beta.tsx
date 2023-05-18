
import { ActionArgs, LoaderArgs, json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import React from "react";
import { set } from "zod";
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
  const score = Number(value.slice(-1))

    // shortenedEvidenceType is the first 3 letters of the name of the EvidenceType eg Population = pop
    const shortenedEvidenceType = name.split(' ')[0];
    //  combo is the shortenedEvidenceType, subcategory and score eg pop B 1
    const combo = `${name} ${value} ${score}`
      
    const newCriteria =[...criterias]
    
    // if the newCriteria array already contains a value that starts with the shortenedEvidenceType eg pop B 1 then replace that value with the new combo value
    if(newCriteria.some((criteria) => criteria.startsWith(shortenedEvidenceType))) {
      const index = newCriteria.findIndex((criteria) => criteria.startsWith(shortenedEvidenceType))
      newCriteria[index] =shortenedEvidenceType + '_' + subcategory +  '_'  + score
    }else {
      // if the newCriteria array does not contain a value that starts with the shortenedEvidenceType eg pop B 1 then add the combo value to the newCriteria array
      newCriteria.push(shortenedEvidenceType + '_' + subcategory +  '_'  + score)
    }
    // set the criterias state to the newCriteria array
    const [population, functional, protein, reputableSource, caseLevel] = newCriteria
    console.log(population, 'population');
    
    setCriterias(newCriteria);
    console.log(newCriteria, 'newCriteria');
    
    // sum the total score from the newCriteria array and set the total state to the sum of the array which corresponds to the total bayes score and set the classification state to the classification name eg Benign
    const trimmedCriteria = newCriteria.map((criteria) => criteria.slice(-3))
    console.log(trimmedCriteria, 'trimmedCriteria');

    const subTotal = getNumbers(trimmedCriteria)
   const total = subTotal.reduce((a, b) => a + b, 0)
    console.log(total, 'total');
   setTotals(total)
    
  
   if(total <= -7) {
    setClassification('Benign')
    }else if(total >= -6 && total <= -1) {
      setClassification('Likely Benign')
    }else if(total >= 0 && total <= 5) {
      setClassification('Uncertain Significance')
    }else if(total >= 6 && total <= 9) {
      setClassification('Likely Pathogenic')

    }else if(total >= 10) {
      setClassification('Pathogenic')
    }else {
      setClassification('No Classification')
    }
  
  
   
//  const mappedName = mapScoreToName(scoreMatrix, total)
//   console.log(mappedName, 'mappedName');
//   setClassification(mappedName)

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


function getNumbers(trimmedCriteria: string[]) {
  const myArray =[] as number[]
  trimmedCriteria.forEach((criteria) => {
    if(criteria.startsWith('B')) {
      const number = -Number(criteria.slice(-1))
      myArray.push(number)
    }else if(criteria.startsWith('P')) {
      const number = Number(criteria.slice(-1))
      myArray.push(number)
    }
  })
  return myArray

    
  
}

function mapScoreToName(scoreMatrix: any, total: number) {
  for (const entry of scoreMatrix) {
    const [minScore, maxScore] = entry.score;
    console.log(minScore, 'minScore');
    g
    if (total >= minScore && total <= maxScore) {
      return entry.name;
    }
  }
  return 'No Classification'; // Return a default value if the total doesn't fall within any range
}