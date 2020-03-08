// Modules
import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { connect } from "react-redux";
import stringToColor from "../../../utils/stringToColor.util";

export const PopulationGraph = ({selected, populations, prefectures}) => {
  const minYear = 1960; // TODO: Don't hardcode year values. Instead, it should use
  const maxYear = 2045; //       first & last year values from population response
  const tickCount = (Math.ceil(maxYear - minYear) / 5) + 1; // Show value for every 5 years

  return (
    <div>
      <div>総人口グラフ</div>
      <LineChart width={600} height={400}>
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
    </div>
  );
}

export default PopulationGraph;
