import { log } from "console";
import React, { useState } from "react";
import { set } from "zod";
import type { GroupData} from "~/constants/acmg-criteria";
import { acmgCriteria,convertToNumbers, extractFirstTwoLetters, strengthValues } from "~/constants/acmg-criteria";

const ACMGCalculator = () => {
  const [selectedCriteria, setSelectedCriteria] = useState<
    Partial<
      Record<keyof typeof acmgCriteria, { benign?: string; pathogenic?: string }>
    >
  >({});
  const [scores, setScores] = useState<GroupData>({});
const [criteriaArray, setCriteriaArray] = useState<string[]>([]);
  const handleSelect = (
    group: keyof typeof acmgCriteria,
    category: "benign" | "pathogenic",
    label: string
  ) => {
    const newSelectedCriteria = { ...selectedCriteria };
    
    newSelectedCriteria[group] = {
      ...newSelectedCriteria[group],
      [category]: label,
    };
    const benignValues: string[] = [];
    const pathogenicValues: string[] = [];
    const criteriaArray: string[] = [];
    for (const group in newSelectedCriteria) {
      const { benign, pathogenic } = newSelectedCriteria[group as keyof typeof newSelectedCriteria]as { benign?: string; pathogenic?: string };

      if (benign) {
        criteriaArray.push(benign);
      }
      if (pathogenic) {
        criteriaArray.push(pathogenic);
      }
    }
    console.log(benignValues, "benignValues");
    console.log(pathogenicValues, "pathogenicValues");
    console.log(criteriaArray, "criteriaArray");
    
    setSelectedCriteria(newSelectedCriteria);
    setCriteriaArray(criteriaArray);
    const splitCriteria = extractFirstTwoLetters(criteriaArray);
    console.log(splitCriteria, "splitCriteria");
    const split = convertToNumbers(splitCriteria);
    console.log(split, "split");
  };

  return (
    <div className="p-4">
      <p className="text-2xl font-bold">
        ACMG selected criteria
        {JSON.stringify(selectedCriteria)}

      </p>


      <p className="text-2xl font-bold">
        ACMG scores
        {JSON.stringify(criteriaArray)}
      </p>
      <CriteriaTracker criteria={criteriaArray} />
      <form method="POST">
        {Object.keys(acmgCriteria).map((group) => (
          <div key={group} className="mb-4">
            <h2 className="mb-2 text-center text-base font-semibold capitalize">
              {group}
            </h2>
            <div className="flex flex-col justify-around">
              <div className="mb-2">
                <p>Benign:</p>
                <select
                  name={group}
                  className="w-full rounded border p-2 text-black"
                  onChange={(e) =>
                    handleSelect(
                      group as keyof typeof acmgCriteria,
                      "benign",
                      e.target.value
                    )
                  }
                >
                  <option value="">--Please choose an option--</option>
                  {acmgCriteria[group as keyof typeof acmgCriteria].benign.map(
                    (label) => (
                      <option key={label} value={label}>
                        {label}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div>
                <p>Pathogenic:</p>
                <select
                  className="w-full rounded border p-2 text-black"
                  onChange={(e) =>
                    handleSelect(
                      group as keyof typeof acmgCriteria,
                      "pathogenic",
                      e.target.value
                    )
                  }
                >
                  <option value="">--Please choose an option--</option>
                  {acmgCriteria[
                    group as keyof typeof acmgCriteria
                  ].pathogenic.map((label) => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
        <input
          type="hidden"
          name="selectedCriteria"
          value={JSON.stringify(selectedCriteria)}
        />

        <button className="w-full rounded bg-blue-500 p-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ACMGCalculator;


function CriteriaTracker({
  criteria
}:{
  criteria: string[]
}){
const rowData = criteria.join(" ");

  return(
    <div className="flex flex-col gap-2">
      {rowData}
    </div>

  )
}

const myData = ['BA1','PP4','PM2_Supporting']

const processMyData = (myData: string[]): number[][] => {
  const processedData: number[][] = [];

  for (const item of myData) {
    let firstLetter: string;
    let secondLetter: string;

    if (item.startsWith('B')) {
      firstLetter = 'B';
      const underscoreIndex = item.indexOf('_');
      if (underscoreIndex > -1 && item.includes('_Supporting')) {
        secondLetter = item[underscoreIndex + 1];
      } else {
        secondLetter = item[1];
      }
      processedData.push([-1, strengthValues[secondLetter]]);
    } else if (item.startsWith('P')) {
      firstLetter = 'P';
      const underscoreIndex = item.indexOf('_');
      if (underscoreIndex > -1 && item.includes('_Supporting')) {
        secondLetter = item[underscoreIndex + 1];
      } else {
        secondLetter = item[1];
      }
      processedData.push([1, strengthValues[secondLetter]]);
    }
  }

  return processedData;
};



const myArrayToNumber = ["BA","PP","PM"]



