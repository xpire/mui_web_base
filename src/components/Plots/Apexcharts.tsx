import React from "react";
import Chart from "react-apexcharts";

// import { FinnhubData } from "./CandleStickPlot";

export type FinnhubData = {
  x: Date;
  y: number[];
};

type ApexProps = {
  series: any[];
};

const options = {
  chart: {
    type: "candlestick",
    height: 350,
    animations: {
      enabled: true,
      easing: "easeinout",
      dynamicAnimation: {
        enabled: true,
      },
    },
  },
  title: {
    text: "CandleStick Chart",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

const CandleStickPlotApex = ({ series }: ApexProps) => {
  console.log({ series });
  return (
    <Chart
      options={options}
      series={[{ data: series }]}
      type="candlestick"
      height={350}
    />
  );
};

export default CandleStickPlotApex;
