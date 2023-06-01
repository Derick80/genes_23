import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { set } from "zod";

type OptionType = {
  label: string;
  value: string;
  definition: string;
};

type DropdownProps = {
  options: OptionType[];
  onChange: (selectedOption: OptionType | undefined) => void;
  title: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>();
  const [selected, setSelected] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const handleSelectRemove = (option: { value: string; label: string }) => {
    const nextSelectedOption = [...selected];
    const selection = nextSelectedOption.find(
      (item) => item.value === option.value
    );
    if (selection) {
      const index = nextSelectedOption.indexOf(selection);
      nextSelectedOption.splice(index, 1);
    }

    setSelected(nextSelectedOption);
    onChange(option);
  };

  React.useEffect(() => {
    const handleKeyboardEvent = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyboardEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, []);

  function clearOptions() {
    setSelected([]);
    setSelectedOption(undefined);
  }

  return (
    <div className="relative flex w-72 flex-col gap-2 rounded-md border-2 p-1">
      {title}
      <div className="flex justify-between gap-2">
        <div className="flex w-1/2 flex-row   items-center gap-2">
          <p className="text-xs">
            {selectedOption?.label || "Select an option"}
          </p>
          <button
            type="button"
            ref={buttonRef}
            className=""
            onClick={(e) => {
              e.stopPropagation();
              clearOptions();
            }}
          >
            {selectedOption?.value && <Cross2Icon />}
          </button>
        </div>
        <button
          type="button"
          className="flex flex-row items-center  gap-2 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </div>
      {isOpen && (
        <ul
          className="absolute left-[50%] top-10 z-10 w-full -translate-x-1/2 transform rounded-md border-2 
                    bg-white p-1
                    text-black"
        >
          {options.map((option) => (
            <>
              <li
                className="flex w-full cursor-pointer  flex-col overflow-auto hover:bg-gray-200"
                key={option.value}
                onClick={() => [
                  onChange(option),
                  setSelectedOption(option),
                  setIsOpen(false),
                ]}
              >
                <div className="items-centser flex flex-col justify-between gap-1 border-b-2">
                  <p className="text-base">{option.label}</p>
                  <p className="text-[8px]">Definition:{option.definition}</p>
                </div>
              </li>
            </>
          ))}
        </ul>
      )}
      {options.map((option) => (
        <input
          key={option.value}
          type="hidden"
          name={option.value}
          value={selectedOption?.label}
        />
      ))}
    </div>
  );
};

export default Dropdown;
