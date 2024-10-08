import React from "react";
import { SelectInputProps } from "../utils/interface";

const SelectInput: React.FC<SelectInputProps> = ({ label, options, selectedValue, onChange,errorMsg }) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <select
        className="select bg-white text-gray-800 select-bordered rounded-[5px] w-full max-w-xs"
        value={selectedValue}
        onChange={onChange}
      >
        <option value="">
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}

    </div>
  );
};

export default SelectInput;
