import React from "react";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
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
        className="dropdown-toggle"
        onClick={toggleDropdown}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {selectedOption || "Select an option"}
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
