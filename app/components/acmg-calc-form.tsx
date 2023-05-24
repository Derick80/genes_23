import { Form } from "@remix-run/react";
import React from "react";
import { useState } from "react";
import { set } from "zod";
import {
    AcmgCriteria,
  GroupData,
  acmgCriteria,
  convertToNumbers,
  extractFirstTwoLetters,
  getAcmgData,
  strengthValues,
} from "~/constants/acmg-criteria";

const ACMGCalculatorV2 = ({acmgCriteria}:
    {
        acmgCriteria: AcmgCriteria
    }) => {
        
    const [selectedCriteria, setSelectedCriteria] = useState<GroupData>({});
 
 const combinedData=(data:GroupData)=>{

    const combinedData: {
        [group: string]: string[] 
    } = {};
    for(const group in data){
        const {benign, pathogenic} = data[group];
        const combinedArray: string[] = [];
        if(benign){
            combinedArray.push(...benign)
        }
        if(pathogenic){
            combinedArray.push(...pathogenic)
        }
        combinedData[group] = combinedArray;
 }
    return combinedData;
}


const rearranged = combinedData(acmgCriteria);

    console.log(rearranged, "rearranged")
// This works...

    const handleSelect = (event: 
        React.ChangeEvent<HTMLInputElement>,
        )=>{
            const {name, value} = event.target;
           const checked = event.target.checked;
           const isMultiSelect = event.target.type === 'checkbox';

              if(checked && isMultiSelect){
                setSelectedCriteria({
                    ...selectedCriteria,
                    [name]: {
                        ...selectedCriteria[name],
                        [value]: value
                    }
                })
                }else if(!checked && isMultiSelect){
                    const {[value]: removed, ...rest} = selectedCriteria[name];
                    setSelectedCriteria({
                        ...selectedCriteria,
                        [name]: rest
                    })
                }else{
                    setSelectedCriteria({
                        ...selectedCriteria,
                        [name]: {
                            [value]: value
                        }
                    })
                }



    }


    








  return (
    <div className="p-4">
        {
            <pre className="text-xs">
                {JSON.stringify(selectedCriteria, null, 2)}
            </pre>
        }
     <Form method="POST">
        {Object.keys(rearranged).map((group) => (
            <div key={group} className="mb-4">
                <h2 className="mb-2 text-center text-base font-semibold capitalize">
                    {group}
                </h2>
                <div className="flex flex-col gap-2">
                    {rearranged[group].map((label) => (
                        <div key={label}>
                            <label className="flex items-center gap-2">
                                <input
                                    type={group === 'functional' ? 'checkbox' : 'radio'}
                                    name={group}
                                    value={label}
                                    onChange={(e) =>
                                        handleSelect(

                                            e
                                        )
                                    }
                                />
                                <span>{label}</span>
                            </label>


    </div>

                    ))}
                </div>
            </div>
        ))}
        <button type="submit">Submit</button>
    </Form>
    </div>

  );
};

export default ACMGCalculatorV2;

function CriteriaDetail({ selectedCriteria }: { selectedCriteria: GroupData }) {
  const evidenceType = Object.keys(selectedCriteria).map((evidence) => {
    return evidence;
  });

  console.log(evidenceType, "evidenceType");

  return (
    <div className="flex flex-col gap-2">
      {evidenceType.map((evidence) => (
        <div key={evidence}>
          <h3 className="text-xl font-bold capitalize">{evidence}</h3>

          <p className="text-gray-500">{selectedCriteria[evidence].benign}</p>
          <p className="text-gray-500">
            {selectedCriteria[evidence].pathogenic}
          </p>
        </div>
      ))}
    </div>
  );
}
function CriteriaSelected({ criteriaArray }: { criteriaArray: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {criteriaArray.map((criteria) => (
        <p key={criteria}>{criteria}</p>
      ))}
    </div>
  );
}

const myData = ["BA1", "PP4", "PM2_Supporting"];

const myArrayToNumber = ["BA", "PP", "PM"];
