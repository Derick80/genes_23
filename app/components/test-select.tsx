import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Portal } from './portal';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { SelectPortal } from '@radix-ui/react-select';

interface Option {
    id: string;
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
    console.log(options, 'options');
    
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const dropdown = isOpen ? (
    <ul
    
    className="block">
      {options.map((option) => (
        <li
          key={option.id}
          className='text-green-500 overflow-auto'
          onClick={() => handleOptionClick(option)}
        >
            <p className="text-green-500">{option.label}</p>

        <p className="text-green-500">{option.value}</p>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div
        id='select-portal'
    className="flex flex-col items-center border-2 w-20 " ref={selectRef}>
     <div className="selected-option" onClick={toggleDropdown}>
        <ChevronDownIcon />
      </div>
      <div>
       <Portal wrapperId='select-portal'>
        {dropdown}
         </Portal>
      </div>
      
    </div>
  );
};

export default Select;
