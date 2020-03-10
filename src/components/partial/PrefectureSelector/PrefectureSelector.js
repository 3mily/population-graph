// Modules
import React from "react";
import { includes } from "lodash";

// Base Components
import Checkbox from "../../base/Checkbox";

// Styling
import './PrefectureSelector.scss';

export const PrefectureSelector = ({
  errors,
  isLoading,
  selected,
  setSelected,
  population,
  prefectures,
  getPopulationForPrefectureCode,
  onChange,
}) => {
  return (
    <div className="prefecture-selector">
      {
        errors.map((errorString) => {
          return (
            <div
              key={errorString}
              className="error-bar"
            >
              Error: {errorString}
            </div>
          );
        })
      }
      <div className="prefecture-selector-label">都道府県</div>
      <div className="prefecture-selector-items">
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
    </div>
  );
}

export default PrefectureSelector;
