import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import React from "react";
import { set } from "zod";
import { Criterion } from "~/constants/acmg-criteria";
export type Selected = {
  label: string;
  value: string;
};

export type AccordionData = {
  label: string;
  value: string;

  definition: string;
}[];

export type AccordionProps = {
  data: AccordionData;
};

export type PanelProps = {
  title: string;
  children: React.ReactNode;
  selected: Selected[];
  setIsActivated: React.Dispatch<React.SetStateAction<boolean>>;
};

function Panel({ title, children, setIsActivated, selected }: PanelProps) {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className="relative">
      <h3 className="text-xl">{title}</h3>
      <div className="flex flex-row gap-2">
        {selected.map((item) => {
          return (
            <div key={item.value} className="flex flex-row gap-2">
              <button
                onClick={() => {
                  setIsActive(!isActive);
                  setIsActivated(!isActive);
                }}
                className="flex flex-row items-center gap-2"
              >
                <div
                  className={`h-4 w-4 rounded-full border-2 border-black ${
                    selected.includes(item) ? "bg-black" : ""
                  }`}
                />
                {item.label}
                {item.value}
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setIsActive(!isActive)}
        className="flex flex-row items-center gap-2"
      >
        {isActive ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {isActive && (
        <div className="absolute z-10 bg-white text-black">{children}</div>
      )}
    </div>
  );
}

export default function Accordion({ data }: AccordionProps) {
  console.log(data, "data");

  const [isActive, setIsActive] = React.useState(false);

  const [selected, setSelected] = React.useState<Selected[]>([]);
  console.log(selected, "selected");

  function handleChoices({ label, value }: { label: string; value: string }) {
    const isSelected = selected.some((item) => item.value === value);
    if (isSelected) {
      setSelected((prevSelected) =>
        prevSelected.filter((item) => item.value !== value)
      );
    } else {
      setSelected((prevSelected) => [...prevSelected, { label, value }]);
    }
    setIsActive(false);
  }

  return (
    <>
      <Panel
        title={data.map((item) => {
          return item.label;
        })}
        setIsActivated={setIsActive}
        selected={selected}
      >
        <div className="absolute z-10 border-2 bg-white text-xl text-black">
          {data.map((item) => {
            return (
              <div className=" flex flex-col gap-1" key={item.label}>
                <button
                  onClick={() => {
                    handleChoices({
                      label: item.label,
                      value: item.value,
                    });
                  }}
                  className="flex flex-row items-center gap-2"
                >
                  <div
                    className={`h-4 w-4 rounded-full border-2 border-black ${
                      selected.includes(item) ? "bg-black" : ""
                    }`}
                  />
                  {item.label}
                </button>
              </div>
            );
          })}
        </div>
      </Panel>
    </>
  );
}
