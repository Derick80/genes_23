import { useMatches } from "@remix-run/react";
import { useMemo } from "react";
import { scoreMatrix } from "./constants/consts";

export async function useMatchesData(
  id: string
): Promise<Record<string, string>> {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

export function textFormat(text: string) {
  const firstLetter = text.split("_")[0].substring(0, 1).toUpperCase();
  const middle = text.split("_")[0].substring(1);

  const endofword =
    text.split("_")[1].substring(0, 1).toUpperCase() +
    text.split("_")[1].substring(1);

  return firstLetter + middle + " " + endofword;
}



export  function handleCriteriaSelection(event: React.ChangeEvent<HTMLSelectElement>,
  criterias: string[],
  setCriterias: React.Dispatch<React.SetStateAction<string[]>>,
  setTotals: React.Dispatch<React.SetStateAction<number>>,
  setClassification: React.Dispatch<React.SetStateAction<string>>,
  scoreMatrix: {name: string, score: number[]}[]
  ) {
  const types = ['pop','fun','pro','rep','cas']

  const { name, value } = event.target;
  // subcategory is the first letter of the value Benign = B or Pathogenic = P
  const subcategory = value.substring(0, 1);
    
  // score is the last letter of the value and corresponds to the bayes score from Tavtigian et al 2020
const score = subcategory === 'B' ? Number(value.slice(-1))*-1 : Number(value.slice(-1))

  // shortenedEvidenceType is the first 3 letters of the name of the EvidenceType eg Population = pop
  const shortenedEvidenceType = name.substring(0, 3);
  //  combo is the shortenedEvidenceType, subcategory and score eg pop B 1
  const combo = `${shortenedEvidenceType} ${subcategory} ${score}`
  const index = types.indexOf(shortenedEvidenceType)
    
  const newCriteria =[...criterias]
  newCriteria[index] = combo
  setCriterias(newCriteria);
  // sum the total score from the newCriteria array and set the total state to the sum of the array which corresponds to the total bayes score and set the classification state to the classification name eg Benign
  const total = newCriteria.reduce((acc, curr) => {
    const score = Number(curr.slice(-1))
    return acc + score
  }, 0)
  setTotals(total)
  // find the classification name from the scoreMatrix array that corresponds to the total score
  


  const classification = getMoreNumbers(total)
  setClassification(classification)
    console.log(classification);
    
  
  
}

function getClassification(total:number){
  if(total <= -3 ) {
    return 'Benign'
  } else if (total >= -2 && total <= 2) {
    return 'Likely Benign'
  }
  else if (total >= 3 && total <= 6) {
    return 'Variant of Uncertain Significance'
  }
  else if (total >= 7 && total <= 10) {
    return 'Likely Pathogenic'
  } else return 'Pathogenic'


}


function getMoreNumbers(total:number){
  for(const score of scoreMatrix){
    if(total >= score.score[0] && total <= score.score[1]){
      return score.name
    }
  }
}