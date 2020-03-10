// Modules
import React from "react";

// Styling
import './Checkbox.scss';

const Checkbox = ({label, value, checked, onChange, ...props}) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={value}
        name={value}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={value} className="checkbox-label">
        {label}
      </label>
    </div>
  );
}
export default Checkbox;
