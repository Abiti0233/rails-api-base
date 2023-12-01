"use client";

import { useState } from 'react';

import { useFormState, useFormStatus } from "react-dom";
import Styles from "../../../styles/dashboard/dropdownlist.module.scss";

interface Option {
  value:  string;
  label: string;
}

const DropdownList: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isArrowActive, setArrowActive] = useState(false);

  const options: Option[] = [
    {value: 'バックエンド', label: 'バックエンド'},
    {value: 'フロントエンド', label: 'フロントエンド'},
    {value: 'インフラ', label: 'インフラ'},
  ];

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected || null);
  };

  const arrowClassName = `select-arrow ${isArrowActive ? 'active' : ''}`;

  return (
    <div className={Styles.container}>
      <div className={Styles.selectContainer}>
        <select
          className={Styles.select}
          value={selectedOption?.value || ''}
          onChange={handleSelectOption}
          onFocus={() => setArrowActive(true)}
          onBlur={() => setArrowActive(false)}>
            <option value="">選択してください</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
      </div>
    </div>
  );
}

export default DropdownList;

