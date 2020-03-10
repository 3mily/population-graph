// Modules
import React, { useState } from 'react';
// Partial Components
import PrefectureSelector from "../../partial/PrefectureSelector";
import PopulationGraph from "../../partial/PopulationGraph";
// Styling
import './AppRoot.scss';
export const AppRoot = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="app">
      <div className="content">
      <header>
        Prefecture Population Graph of Japan
      </header>
      <div className="graph">
        <section>
          <PrefectureSelector
            selected={selected}
            setSelected={setSelected}
           />
        </section>
        <section>
          <PopulationGraph selected={selected} />
        </section>
        </div>
      </div>
    </div>
  );
}
export default AppRoot;
