import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Dropdown from "~/components/accord-drop";
import { prisma } from "~/server/prisma.server";
import React from "react";
import type {
  Criterion} from "~/constants/acmg-criteria";
import {
  convertToNumbers,
  extractFirstTwoLetters,
} from "~/constants/acmg-criteria";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
export async function loader({ request, params }: LoaderArgs) {
  const criteria = await prisma.criterion.findMany();

  return json({ criteria });
}


export async function action({request, params}: ActionArgs) {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData), "formData"

  );

  const pop =formData.get('Population Data')
  const func =formData.getAll('Functional Data')
  const comp =formData.get('Computational and Predictive Data')
  const seg =formData.get('Segregation Data')
  const deNovo =formData.get('De Novo Data')
  const allelic =formData.get('Allelic Data')
  const other =formData.get('Other Data')
  const patho =formData.get('Other Database')

  



return json({
  message: "success",
})
}
export default function Wip() {
  const data = useLoaderData<typeof loader>();
  const [open, setOpen] = React.useState(false);
  const [criteriaUsed, setCriteriaUsed] = React.useState<
    {
      type: string;
      label: string;
    }[]
  >([]);

  console.log(criteriaUsed, "criteriaUsed");
  const checkboxselected = criteriaUsed.filter((item) => {
    return item.type === "Functional Data";
  });

  const fixedSelectedCriteria = criteriaUsed.map((item) => {
    return item.label;
  });

  const reducedSelectedCriteria = extractFirstTwoLetters(fixedSelectedCriteria);
  const transformed = convertToNumbers(reducedSelectedCriteria);
  // Extract the functional data from the criteria array to be used in the checkbox

  const functional_data = data.criteria.filter((item) => {
    return item.evidenceType === "Functional Data";
  });

  // extract non functional data from the criteria array to be used in the dropdown
  
  const woFunctional = data.criteria.filter((item) => {
    return item.evidenceType !== "Functional Data";
  });

  type CurType = {
    evidenceType: string;
    label: string;
  };
  // create an object with the evidenceType as the key and the array of criteria as the value

  const accordianData = woFunctional
    .reduce((acc, cur) => {
      const index = acc.findIndex((item) => {
        return item === cur.evidenceType;
      });
      if (index === -1) {
        acc.push(cur.evidenceType);
      }
      return acc;
    }, [] as string[])
    .reduce((acc, cur) => {
      acc[cur] = woFunctional.filter((item) => {
        return item.evidenceType === cur;
      });
      return acc;
    }, {} as Record<string, CurType[]>);

  const handleSelect = (option: { value: string; label: string }) => {
    // if criteriaUsed has the same type as the option, remove it from the array and add the new one

    const index = criteriaUsed.findIndex((item) => {
      return item.type === option.value;
    });
    if (index !== -1) {
      setCriteriaUsed((prev) => {
        const copy = [...prev];
        copy.splice(index, 1);
        return [...copy, { type: option.value, label: option.label }];
      });
      return;
    }

    setCriteriaUsed((prev) => [
      ...prev,
      { type: option.value, label: option.label },
    ]);
  };

  // handle checkbox change and add the selected criteria to the criteriaUsed array

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>){
    const { name, value, checked } = e.target;
    if (checked && checkboxselected.length < 4) {
      setCriteriaUsed((prev) => [...prev, { type: name, label: value }]);
      return;
    }
    setCriteriaUsed((prev) => {
      const copy = [...prev];
      const index = copy.findIndex((item) => {
        return item.label === value;
      });
      if (index !== -1) {
        copy.splice(index, 1);
      }
      return [...copy];
    });
  };

  const dropdowns = Object.entries(accordianData).map((key) => {
    return (
      <Dropdown
        key={key[0]}
        title={key[0]}
        options={data.criteria
          .filter((criterion) => {
            return criterion.evidenceType === key[0];
          })
          .map((criterion) => {
            return {
              value: criterion.evidenceType,
              label: criterion.label,
              definition: criterion.definition,
            };
          })}
        onChange={handleSelect}
      />
    );
  });

  return (
    <div className="flex min-h-screen flex-col items-center py-2 pb-10 pt-10">
      <h1 className="text-2xl font-bold">ACMG Criteria Work in Progress</h1>
      {criteriaUsed.map((item) => {
        return (
          <div className="flex gap-2" key={item.type}>
            {item.label}
          </div>
        );
      })}
      {transformed.classification}

     <Form method="post">
     {dropdowns}

<div className="flex flex-col gap-2">
  <CheckBoxes
    checkboxselected={checkboxselected}
    data={functional_data}
    setIsOpen={setOpen}
    handleCheckboxChange={handleCheckboxChange}
  />
  </div>
  <button type="submit">Submit</button>
     </Form>
    </div>
  );
}

function CheckBoxes({
  data,
  setIsOpen,
  handleCheckboxChange,
  checkboxselected,
}: {
  checkboxselected: {
    type: string;
    label: string;
  }[];

  data: Criterion[];
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<
    {
      name: string;
      value: string;
      label: string;
    }[]
  >([]);

  return (
    <div className="flex w-72 flex-col gap-2 rounded-md border-2 p-1">
      <div className="flex justify-between gap-2">
        {
          data.length > 0 && (
            <div className="flex gap-2">
              <p className="p-1">{data[0].evidenceType}</p>
            
            </div>
          )


        }
        {selected.map((item) => {
          return <div key={item.value}>{item.label}</div>;
        })}

        <button
        type='button'
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </div>

      <div className="flex gap-2">
        {checkboxselected.map((item) => {
          return (
            <div key={item.label} className="flex gap-2 text-white">
              <p className="p-1">
              {item.label}</p>
            </div>
          );
        })}
      </div>
      {open && (
        <div className="flex flex-col gap-2">
          {data.map((criterion) => {
            return (
              <>
                <label
                  key={criterion.evidenceType}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    name={criterion.evidenceType}
                    value={criterion.label}
                    onChange={handleCheckboxChange}
                  />
                  {criterion.label}
                </label>
                <p className="text-sm">{criterion.definition}</p>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
