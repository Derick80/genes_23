import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import type { LoaderArgs } from "@remix-run/node";
import { prisma } from "~/server/prisma.server";
import { Form, useLoaderData } from "@remix-run/react";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import type { Criterion } from "~/constants/acmg-criteria";
import Button from "~/components/button";
import * as Select from '@radix-ui/react-select';

export async function loader({ request, params }: LoaderArgs) {
  const criteria = await prisma.criterion.findMany();
  console.log(criteria, "criteria");

  return json({ criteria });
}
export async function action({ request, params }: ActionArgs) {
  return json({});
}

export default function Beta() {
  const data = useLoaderData<typeof loader>();

  const byEvidenceType = data.criteria.reduce((acc, criterion) => {
    const { evidenceType } = criterion;
    if (!acc[evidenceType]) {
      acc[evidenceType] = [];
    }
    acc[evidenceType].push(criterion);
    return acc;
  }, {} as Record<string, typeof data.criteria>);
  console.log(byEvidenceType, "byEvidenceType");
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Form method="post" action="/beta"
      className="flex flex-col gap-2"
      >
      

     <DropMenu criteria={data.criteria}
      setOpened={setOpen}
     />

        <Button variant="primary_filled" size='base' type="submit">
          Submit
        </Button>

      </Form>
    </>
  );
}
function DropMenu({
  criteria,
  setOpened,
}:{
  criteria: Criterion[],
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>
}){
  console.log(criteria, "criteria in DropMenu");
  
const [open,setOpen ] = React.useState(false);
  const [selected, setSelected] = React.useState<[]>([]);

const selections = criteria.reduce((acc, criterion) => {
  const { evidenceType } = criterion;
  if (!acc[evidenceType]) {
    acc[evidenceType] = [];
  }
  acc[evidenceType].push(criterion);
  return acc;
}, {} as Record<string, typeof criteria>);
const computational = selections["Computational and Predictive Data"];
const functional = selections["Functional Data"];
const population = selections["Population Data"];
const segregation = selections["Segregation Data"];
const deNovo = selections["De Novo Data"];
const allelic = selections["Allelic Data"];
const other = selections["Other Data"];
const otherDatabase = selections["Other Database"];
console.log(otherDatabase, "otherDatabase");

console.log(selections, "selections");
const trimmed = criteria.map((criterion) => {
  return {
    evidenceType: criterion.evidenceType,
    label: criterion.label,
    value: criterion.label,
  }
});
console.log(trimmed, "trimmed");


const noFunctional = criteria.filter((criterion) => criterion.evidenceType !== "Functional Data").map((criterion) => {
  return {
    evidenceType: criterion.evidenceType,
    label: criterion.label,
    value: criterion.label,
  }
});
console.log(noFunctional, "noFunctional");

const functionalData = criteria.filter((criterion) => criterion.evidenceType === "Functional Data");
console.log(functionalData, "functionalData");
console.log(Array.isArray(functionalData), "functionalData");


 const columns = criteria.reduce((acc, criterion) => {
    const { evidenceType } = criterion;
    if (!acc[evidenceType]) {
      acc[evidenceType] = [];
    }
    acc[evidenceType].push(criterion);
    return acc;
  }, {} as Record<string, typeof criteria>);
  console.log(columns, "columns");

  return (
    <div
      className="flex flex-col gap-2"
    >
     <div className="flex">
      <p className="text-sm text-gray-500">Evidence Addition</p>


     </div>
     {
      columns && Object.keys(columns).map((evidenceType) => {
        const criteria = columns[evidenceType];
        return (
          <div key={evidenceType} className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <span>{evidenceType}</span>
              <span className="text-sm text-gray-500">
                {criteria.length} criteria
                
              </span>
             
            </div>
            <div className="flex flex-col gap-2">
           
              
            {
              criteria.map((criterion) => {
                return (
                  <div key={criterion.id} className="flex flex-row justify-between items-center">
                    <span>{criterion.label}</span>
                    
                  </div>
                )
              })
            }
            
        

          </div>
          </div>

        );
      }
      )

     }
    </div>
  )
}



function RadioInput({
  criteria,
  setOpened,
}:
{
  setOpened?: Boolean,
  criteria: Criterion[]
  }){
  const [open, setOpen] = React.useState(false);
const [selected, setSelected] = React.useState([
  {
    type: [criteria[0].evidenceType],
  }
  
]);

console.log(selected, "selected");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // extract the name which is the evidenceType and the value which is the label PM2_supporting example
    const {value,name}  = event.target;
    // determine if the input is a radio or checkbox
    const isRadio = event.target.type === "radio";
    const isCheckbox = event.target.type === "checkbox";
    // if the input is a radio, then we want to set the selected to the value of the radio
    // if the input is a checkbox, then we want to add the value of the checkbox to the selected array
    // if the input is a checkbox and it is already selected, then we want to remove the value from the selected array
    // if the input is a checkbox and it is not already selected, then we want to add the value to the selected array
    // if the input is a radio, then we want to set the selected to the value of the radio
    // if the input is a checkbox, then we want to add the value of the checkbox to the selected array
    
    if (isRadio) {
      setSelected([
        {
          type: [value],
        }
      ]);
    }
    if (isCheckbox) {
      if (selected[0].type.includes(name)) {
        setSelected([
          {
            type: selected[0].type.filter((type) => type !== name),
          }
        ]);
      } else {
        setSelected([
          {
            type: [...selected[0].type, value],
          }
        ]);
      }
    }



    
  };


  return(
    <>  
      <div className="flex flex-col items-start">
      
        <pre className="text-xs text-gray-500">
          {JSON.stringify(selected, null, 2)}
        </pre>
        <div className="flex flex-cl items-center">
        <p className="text-sm text-gray-500">Evidence Addition</p>
       
        <button className="ml-2" onClick={() => 
          setOpen(!open)
        }>
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        </div>
      

       
       <div className="flex flex-col items-start">
        {
          open && criteria.map((criterion) => {
            return (
             <div
              key={criterion.label}
             className="flex flex-row items-center gap-2">
               <label key={criterion.label} className="flex items-center gap-2">
                <input
                className="w-4 h-4 flex flex-col"
                  type={criterion.evidenceTypeShort === "Functional" ? "checkbox" : "radio"}
                  name={criterion.evidenceType}
                  value={
                    criterion.label
                  }
                  
                  onChange={handleChange}
                />
                <div
                  className="text-sm text-gray-500 flex flex-col"
                >{criterion.label}</div>
              </label>
              </div>
            );
          }
          )
        }
       </div>

      </div>
    
    </>
  )
  }

function DropDown({
  criteria,
  setOpened,
}:{
  criteria: Criterion[],
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>
}){
  console.log(criteria, "criteria in DropDown");

  const [open, setOpen] = React.useState(false);
  const selections = criteria.reduce((acc, criterion) => {
    const { evidenceType } = criterion;
    if (!acc[evidenceType]) {
      acc[evidenceType] = [];
    }
    acc[evidenceType].push(criterion);
    return acc;
  }
  , {} as Record<string, typeof criteria>);

  return(
    <>
    <Select.Root open={open} onOpenChange={setOpen}>
      <Select.Trigger>
        <span>Select a criterion</span>
        <Select.Arrow />
      </Select.Trigger>
      <Select.Content>
        {Object.keys(selections).map((evidenceType) => {
          const criteria = selections[evidenceType];
          return (
            <Select.Group
            key={evidenceType}
             label={evidenceType}>
              {criteria.map((criterion) => {
                return (
                  <Select.Item 
                  key={criterion.label}
                  value={criterion.label}>
                    {criterion.label}
                  </Select.Item>
                );
              })}
            </Select.Group>
          );
        }
        )}
      </Select.Content>
    </Select.Root>

    </>
  )
}