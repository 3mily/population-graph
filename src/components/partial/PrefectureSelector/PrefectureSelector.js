// Modules
import React from "react";
import { includes } from "lodash";

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
  onChange,
}) => {
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
