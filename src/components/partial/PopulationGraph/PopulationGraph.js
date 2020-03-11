// Modules
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import stringToColor from "../../../utils/stringToColor.util";
import LoadingSpinner from "../../base/LoadingSpinner";
import './PopulationGraph.scss';

export const PopulationGraph = ({
  selected,
  populations,
  prefectures,
  isLoading,
}) => {
  const minYear = 1960; // TODO: Don't hardcode year values. Instead, it should use
  const maxYear = 2045; //       first & last year values from population response
  const tickCount = (Math.ceil(maxYear - minYear) / 5) + 1; // Show value for every 5 years
  return (
    <div className="population-graph">
      <div className="population-graph-label">
        総人口グラフ
       { isLoading ? <LoadingSpinner size={15} /> : null }
      </div>
      <ResponsiveContainer width="100%" height={400}>
      <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey="year"
          type="number"
          tickCount={tickCount}
          domain={[dataMin => minYear, dataMax => maxYear]}
        />
        <YAxis
          dataKey="value"
          type="number"
        />
        {
          selected.map((code) => {
            if (populations[code] && prefectures[code]) {
              return (
                <Line
                  dataKey="value"
                  data={populations[code]}
                  name={prefectures[code].name}
                  key={prefectures[code].name}
                  stroke={stringToColor(prefectures[code].name)}
                />
              );
            }
          })
        }
        <Tooltip />
        <Legend />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default PopulationGraph;
