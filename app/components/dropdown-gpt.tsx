import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

interface DropdownProps {
  options: string[];
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({ options, setSelected }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
        className="flex w-full items-center justify-between "
        onClick={toggleDropdown}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <p className="text-white">{selectedOption || "Select"}</p>
        <ChevronDownIcon className="text-teal-400" />
      </button>
      {isOpen && (
        <div
          className="dropdown-menu"
          data-dropdown-menu
          onClick={(e) => e.stopPropagation()}
        >
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-menu-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
