import type { ActionArgs, LoaderArgs } from '@remix-run/node'

import {json, redirect} from '@remix-run/node';
import { Form } from '@remix-run/react';
import { log } from 'console';
import React from 'react';
import { set } from 'zod';
import { criteria, scoreMatrix } from '~/constants/consts';

export async function loader({request, params}: LoaderArgs) {
 const id = params.id
 if(!id) return redirect('/variants')
 

return json({})
}
export async function action({ request }: ActionArgs) {
    const formData = await request.formData();
    const population = formData.get("population");
    const functional = formData.get("functionalComputational");
    const protein = formData.get("protein");
    const reputableSource = formData.get("reputableSource");
    const caseLevel = formData.get("caseLevel");
    const variantNotes = formData.get("variantNotes");
  
   
    return json({ message: "updated" });
  }

  export default function VariantAnnotationRoute() {



    const [criterias, setCriterias] = React.useState<string[]>([]);
    const [totals, setTotals] = React.useState<number>(0);
    const [classification, setClassification] = React.useState<string>("");
    const [variantNotes, setVariantNotes] = React.useState<string>("");
  
   React.useEffect(() => {
    setTotals(totals)
   }, [totals])

    function handleCriteriaSelection(event: React.ChangeEvent<HTMLSelectElement>
        ) {
        const types = ['pop','fun','pro','rep','cas']
      
        const { name, value } = event.target;
        // subcategory is the first letter of the value Benign = B or Pathogenic = P
        const subcategory = value.substring(0, 1);
          
        // score is the last letter of the value and corresponds to the bayes score from Tavtigian et al 2020
      const score = subcategory === 'B' ? Number(value.slice(-1))*-1 : Number(value.slice(-1))
     console.log(score, 'score');
     
      
        // shortenedEvidenceType is the first 3 letters of the name of the EvidenceType eg Population = pop
        const shortenedEvidenceType = name.substring(0, 3);
        //  combo is the shortenedEvidenceType, subcategory and score eg pop B 1
        const combo = `${shortenedEvidenceType} ${subcategory} ` + score
        setVariantNotes(combo)
        
      
        const index = types.indexOf(shortenedEvidenceType)
        const newCriteria =[ ...criterias]
        newCriteria[index] = combo
        setCriterias(newCriteria);
        console.log(newCriteria, 'newCriteria');
        
        // sum the total score from the newCriteria array and set the total state to the sum of the array which corresponds to the total bayes score and set the classification state to the classification name eg Benign
        const total = newCriteria.reduce((acc, curr) => {
          const score = Number(curr.slice(-1))
          console.log(score, 'score');
                    return acc += score
        }, 0)
        console.log(total, 'total');
        
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
      <div className="flex w-full min-h-screen flex-col items-center justify-center py-2">
  
        <main className="flex w-full flex-1 flex-col items-center text-center gap-4">
          <h3 className="text-2xl font-bold">ACMG Classification</h3>
          <p className="text-xl font-bold">
            {criterias}
          </p>
          <p className="text-xl font-bold">Total Score: {totals}</p>
          <p className="text-xl font-bold">Classification: {classification}</p>
  
          <Form method="post" className="flex flex-col gap-1 w-full">
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
                  onChange={
                    
  
                    handleCriteriaSelection}
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
             <label className="text-left capitalize">Notes
                </label>
                <textarea
                  className="rounded-md border border-gray-300 text-black"
                  name='variantNotes'
                  placeholder="Enter notes here"
                />
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