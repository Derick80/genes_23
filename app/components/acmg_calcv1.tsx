import React from "react";
import { useState } from "react";
import { set } from "zod";
import {
  GroupData,
  acmgCriteria,
  convertToNumbers,
  extractFirstTwoLetters,
  getAcmgData,
  strengthValues,
} from "~/constants/acmg-criteria";

const ACMGCalculator = () => {
  const [selectedCriteria, setSelectedCriteria] = useState<GroupData>({});
  
  const [criteriaArray, setCriteriaArray] = useState<string[]>([]);
  const [classification, setClassification] = useState<string>("No classification");

React.useEffect(() => {
  setSelectedCriteria({})
}, [])
  

  const handleSelect = (
    group: keyof typeof acmgCriteria,
    category: "benign" | "pathogenic",
    label: string
  ) => {
// update the selectedCriteria object with the new value from the select box
    selectedCriteria[group] = {
      ...selectedCriteria[group],
      [category]: label,
    };
    setSelectedCriteria(selectedCriteria)
  // Get the new criteriaArray from the getAcmgData function
   const newtest = getAcmgData(group,category,label,selectedCriteria)
    console.log(newtest, "newtest")
    setCriteriaArray(newtest);
    // Get the first two letters from the newtest array to get the classification
    const splitCriteria = extractFirstTwoLetters(newtest);
    // convert the first two letters to numbers and get the classification
    const totalClassification = convertToNumbers(splitCriteria);
    // set the classification state to the classification
    setClassification(totalClassification.classification)
  };

  return (
    <div className="p-4">
      

     
      <CriteriaDetail selectedCriteria={selectedCriteria} />
     <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Classification</h2>
        <p className="text-sm">{classification}</p>
      </div>

      <CriteriaSelected criteriaArray={criteriaArray} />
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


function CriteriaDetail({selectedCriteria}: {selectedCriteria: GroupData}) {
  const evidenceType = Object.keys(selectedCriteria).map((evidence) => {
    return evidence;
  });

  console.log(evidenceType, "evidenceType");
  
  return (
    <div className="flex flex-col gap-2">
      {evidenceType.map((evidence) => (
        <div key={evidence}>
          <h3 className="text-xl font-bold capitalize">{evidence}</h3>
          
          <p className="text-gray-500">
           {selectedCriteria[evidence].benign}

          </p>
          <p className="text-gray-500">
            {selectedCriteria[evidence].pathogenic}
          </p>


    </div>
      ))}
    </div>

  );


}
function CriteriaSelected({criteriaArray}: {criteriaArray: string[]}) {


  return (
    <div className="flex flex-col gap-2">
      {criteriaArray.map((criteria) => (
        <p
          key={criteria}
        >{criteria}</p>
      ))}
    </div>
  );
}

const myData = ["BA1", "PP4", "PM2_Supporting"];



const myArrayToNumber = ["BA", "PP", "PM"];
