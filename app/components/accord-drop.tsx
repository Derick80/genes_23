import { ChevronDownIcon, ChevronUpIcon, Cross2Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

type OptionType = {
  label: string;
  value: string;
  definition: string;
};

type DropdownProps = {
  options: OptionType[];
  onChange: (selectedOption: OptionType) => void;
  title: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
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

  return (
    <div className="relative flex w-72 flex-col gap-2 rounded-md border-2 p-1">
      {title}
   <div className="flex gap-2 justify-between">
    <div
      className="flex w-1/2 flex-row   gap-2 items-center"
    >
      <p className="text-xs">{selectedOption?.label || "Select an option"}</p>
     <button type='button' 
     className=""
    onClick={()=> setSelectedOption(null)}>
        {
          selectedOption && <Cross2Icon />
        }
    </button>

    </div>
      <button
      type='button'
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
              onClick={() => handleSelect(option)}
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
      {
        options.map((option) => (
          <input
            key={option.value}
          type="hidden" name={option.value} value={
            selectedOption?.label
          } />
        ))

      }
    </div>
  );
};

export default Dropdown;
