// Modules
import React, { useState } from 'react';

// Partial Components
import PrefectureSelector from "../../partial/PrefectureSelector";

// Styling
import './AppRoot.css';

export const AppRoot = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div className="App">
      <PrefectureSelector
        selected={selected}
        setSelected={setSelected}
       />
    </div>
  );
}

export default AppRoot;
