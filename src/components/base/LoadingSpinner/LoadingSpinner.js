// Modules
import React from "react";

// Styling
import './LoadingSpinner.scss';

const LoadingSpinner = ({size}) => {
  return (
    <div
      className="loading-spinner"
      style={size ? {height: size, width: size} : null}
     />
  );
}
export default LoadingSpinner;
