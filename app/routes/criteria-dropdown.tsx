import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

export default function CheckBoxes({
  data,
  setIsOpen,
  handleCheckboxChange,
}: {
  data: {
    value: string;
    label: string;
    definition: string;
  }[];
  handleCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        {data[0]["value"]}
        {selected.map((item) => {
          return <div key={item.value}>{item.label}</div>;
        })}

        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-2">
          {data.map((criterion) => {
            return (
              <div key={criterion.value} className="flex items-center gap-2">
                <input
                  className="flex h-[25px] w-[25px] appearance-none items-center  justify-center rounded-[4px] border-2 bg-white shadow-[0_2px_10px] outline-none"
                  name={criterion.value}
                  value={criterion.label}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-base leading-none">{criterion.label}</p>
                </div>
                <p className="text-[8px]">{criterion.definition}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
