import React from "react";
import {
  VictoryChart,
  VictoryTheme,
  VictoryCandlestick,
  VictoryAxis,
} from "victory";

// import { FinnhubData } from "./CandleStickPlot";

export type FinnhubData = {
  o: number;
  h: number;
  l: number;
  c: number;
  t: Date;
};

type VictoryProps = {
  data: FinnhubData[];
};

const CandleStickPlotVictory = ({ data }: VictoryProps) => {
  return (
    <VictoryChart
      animate={{ duration: 500 }}
      theme={VictoryTheme.material}
      domainPadding={{ x: 25 }}
      scale={{ x: "time" }}
      width={400}
      height={400}
    >
      <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
      <VictoryAxis dependentAxis />
      <VictoryCandlestick
        candleColors={{ positive: "green", negative: "#c43a31" }}
        data={data}
        x="t"
        open="o"
        close="c"
        high="h"
        low="l"
      />
    </VictoryChart>
  );
};

export default CandleStickPlotVictory;
