import { criterions } from "prisma/criterion-seed";
import { useState, useEffect } from "react";
import { criteria } from "~/constants/consts";


export default function Beta() {
  
  
  


  return (
    <div
className=''
>
  
      <Dropdown
        options={options}
      />
      <div className=' z-0 relative'>
        lots of other stuff here
        </div>
    </div>
  );
}

const options = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
];
interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

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
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {selectedOption || 'Select an option'}
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








