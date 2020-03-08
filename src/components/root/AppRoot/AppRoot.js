// Modules
import React, { useState } from 'react';

// Partial Components
import PrefectureSelector from "../../partial/PrefectureSelector";
import PopulationGraph from "../../partial/PopulationGraph";

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
      <PopulationGraph
        selected={selected}
      />
    </div>
  );
}

export default AppRoot;
