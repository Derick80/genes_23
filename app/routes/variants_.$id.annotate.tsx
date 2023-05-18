import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";

import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { log } from "console";
import React from "react";
import { set } from "zod";
import Button from "~/components/button";
import Select from "~/components/test-select";
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
  const variantNotes = formData.get("variantNotes");

  return json({ message: "updated" });
}

export default function VariantAnnotationRoute() {
  const {
    populationData,
    functionalData,
    proteinData,
    reputableSourceData,
    caseLevelData,
  } = useLoaderData<typeof loader>();

  const [dropdown, setDropdown] = React.useState(false);
  const [criterias, setCriterias] = React.useState<string[]>([]);
  const [totals, setTotals] = React.useState<number>(0);
  const [classification, setClassification] = React.useState<string>("");
  const [variantNotes, setVariantNotes] = React.useState<string>("");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [scoring, setScoring] = React.useState<number[]>([]);

  const [populationScore, setPopulationScore] = React.useState<number>(0);
  const [functionalScore, setFunctionalScore] = React.useState<number>(0);
  const [proteinScore, setProteinScore] = React.useState<number>(0);
  const [reputableSourceScore, setReputableSourceScore] =
    React.useState<number>(0);
  const [caseLevelScore, setCaseLevelScore] = React.useState<number>(0);

  const [currentCriteria, setCurrentCriteria] = React.useState<string[]>([]);

  React.useEffect(() => {
    const total =
      populationScore +
      functionalScore +
      proteinScore +
      reputableSourceScore +
      caseLevelScore;
    setTotals(total);
  }, [
    populationScore,
    functionalScore,
    proteinScore,
    reputableSourceScore,
    caseLevelScore,
  ]);

  // const handleSelectChange = (value: string) => {
  //   setSelectedOption(value);
  //   setDropdown(false)
  //   const categoryInitial = value.split('')[0]

  //   if(categoryInitial === 'B') {
  //      setScoring([...scoring, -Number(value.slice(-1))])

  //   }else {
  //     setScoring([...scoring, Number(value.slice(-1))])
  //   }

  //   console.log(scoring, 'value');

  // };

  const handleSelectChange = (name: string, value: string) => {
    setSelectedOption(value);
    const categoryInitial = value.split("")[0];
    const score = Number(value.slice(-1));
    const big_name = name + value + categoryInitial + score;
    if (currentCriteria.includes(big_name)) {
      setCurrentCriteria(currentCriteria.filter((item) => item !== big_name));
    } else {
      setCurrentCriteria([...currentCriteria, big_name]);
    }
  };

  React.useEffect(() => {
    const handleKeyboardEvent = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdown(false);
      }
    };
    document.addEventListener("keydown", handleKeyboardEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center py-2">
      {scoring && (
        <div className="flex w-full flex-col items-center gap-1">
          <label htmlFor="population">Total Score</label>
          <p>{totals}</p>
        </div>
      )}

      <Form method="post" className="flex w-full flex-col items-center gap-1">
        {populationData && (
          <div className="flex w-fit flex-col items-center gap-1 border-2 border-black">
            <label className="" htmlFor="population">
              {populationData?.name}
            </label>
            <div className="custom-select relative w-[200px] items-center justify-between">
              <input
                type="checkbox"
                className="hidden"
                name="population"
                id="population"
              />
              <div
                className="flex flex-row items-center justify-around"
                onClick={() => setDropdown(!dropdown)}
              >
                {selectedOption ? (
                  <p>{selectedOption}</p>
                ) : (
                  <p className="text-sm">Select</p>
                )}
                {dropdown ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
              {dropdown && (
                <ul className="absolute w-[200px] cursor-pointer list-none border border-transparent bg-white p-2">
                  {populationData.strength.map((criteria) => (
                    <li
                      className="top-full z-50 text-sm"
                      key={criteria.id}
                      value={criteria.value}
                      onClick={() =>
                        handleSelectChange(populationData.name, criteria.value)
                      }
                    >
                      {criteria.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
        {proteinData && (
          <div className="flex w-fit flex-col items-center gap-1 border-2 border-black">
            <label className="" htmlFor="protein">
              {proteinData?.name}
            </label>
            <div className="custom-select relative w-[200px] items-center justify-between">
              <input
                type="checkbox"
                className="hidden"
                name="protein"
                id="protein"
              />
              <div
                className="flex flex-row items-center justify-around"
                onClick={() => setDropdown(!dropdown)}
              >
                {selectedOption ? (
                  <p>{selectedOption}</p>
                ) : (
                  <p className="text-sm">Select</p>
                )}
                {dropdown ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
              {dropdown && (
                <ul className="absolute w-[200px] cursor-pointer list-none border border-transparent bg-white p-2">
                  {proteinData.strength.map((criteria) => (
                    <li
                      className="top-full z-50 text-sm"
                      key={criteria.id}
                      value={criteria.value}
                      onClick={() =>
                        handleSelectChange(proteinData.name, criteria.value)
                      }
                    >
                      {criteria.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        <button className="rounded-md bg-blue-500 p-2 text-white" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
