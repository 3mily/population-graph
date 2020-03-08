// Modules
import React from "react";
import { includes, without, concat } from "lodash";

// Base Components
import Checkbox from "../../base/Checkbox";

export const PrefectureSelector = ({
  error,
  isLoading,
  selected,
  setSelected,
  population,
  prefectures,
  getPopulationForPrefectureCode,
}) => {

  const onChange = event => {
    const prefCode = event.target.value;

    if (!population[prefCode]) {
      // Only get data if it hasn't already been requested & stored
      getPopulationForPrefectureCode(prefCode)
    }

    // Update selected array
    const newSelected = includes(selected, prefCode)
      ? without(selected, prefCode)
      : concat(selected, prefCode);

    setSelected(newSelected);
  }

  return (
    <div>
      {
        Object.keys(prefectures).map((code) => {
          const prefecture = prefectures[code];
          return (
            <Checkbox
              key={prefecture.name}
              label={prefecture.name}
              value={code}
              checked={includes(selected, code)}
              onChange={onChange}
            />
          );
        })
      }
    </div>
  );
}

export default PrefectureSelector;
