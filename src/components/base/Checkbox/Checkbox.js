// Modules
import React from "react";

const Checkbox = ({label, value, checked, onChange, ...props}) => {
  return (
    <div>
      <label htmlFor={value}>
        {label}
      </label>
      <input
        type="checkbox"
        id={value}
        name={value}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Checkbox;
