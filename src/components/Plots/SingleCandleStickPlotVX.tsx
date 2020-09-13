import React from "react";

// vx
import { Group } from "@vx/group";

import { FinnhubData } from "./CandleStickPlot";

export type AxisPropsVX = {
  width: number;
  height: number;
  showControls?: boolean;
  ColorRange?: string[];
};

const margin = {
  top: 40,
  right: 150,
  bottom: 20,
  left: 50,
};

export const SingleCandleStickPlotVX = ({
  data,
  width: outerWidth = 800,
  height: outerHeight = 800,
  ColorRange = ["green", "red"],
}: { data: FinnhubData } & AxisPropsVX) => {
  const width = outerWidth - margin.left - margin.right;
  const height = outerHeight - margin.top - margin.bottom;

  const offset = 0;
  const boxWidth = 10;
  const center = offset + (boxWidth || 0) / 2;

  const valueRange = data.h - data.l;

  const lowValue = data.l;
  const closeValue = data.c;
  const openValue = data.o;
  const highValue = data.h;

  const strokeWidth = 1;
  const profit = openValue < closeValue;
  const stroke = profit ? ColorRange[0] : ColorRange[1];
  const fill = profit ? ColorRange[0] : ColorRange[1];
  const fillOpacity = 1;

  const rx = 2;
  const ry = 2;

  const boxplot = ((
    valueRange: number,
    lowValue: number,
    highValue: number,
    closeValue: number,
    openValue: number,
    offset: number,
    boxWidth: number
  ) => {
    const TopBox = profit ? closeValue : openValue;
    const BottomBox = profit ? openValue : closeValue;
    return {
      max: {
        x1: center - (boxWidth || 0) / 4,
        x2: center + (boxWidth || 0) / 4,
        y1: highValue,
        y2: highValue,
      },
      maxToThird: {
        x1: center,
        x2: center,
        y1: highValue,
        y2: TopBox,
      },
      minToFirst: {
        x1: center,
        x2: center,
        y1: BottomBox,
        y2: lowValue,
      },
      min: {
        x1: center - (boxWidth || 0) / 4,
        x2: center + (boxWidth || 0) / 4,
        y1: lowValue,
        y2: lowValue,
      },
      box: {
        x1: offset,
        x2: boxWidth || 0,
        y1: TopBox,
        y2: Math.abs(TopBox - BottomBox),
      },
      container: {
        x1: offset,
        x2: boxWidth || 0,
        y1: data.l,
        y2: valueRange,
      },
    };
  })(valueRange, lowValue, highValue, closeValue, openValue, offset, boxWidth);

  return (
    <Group>
      <line
        className="vx-boxplot-max"
        x1={boxplot.max.x1}
        y1={boxplot.max.y1}
        x2={boxplot.max.x2}
        y2={boxplot.max.y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        className="vx-boxplot-max-to-third"
        x1={boxplot.maxToThird.x1}
        y1={boxplot.maxToThird.y1}
        x2={boxplot.maxToThird.x2}
        y2={boxplot.maxToThird.y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <rect
        className="vx-boxplot-box"
        x={boxplot.box.x1}
        y={boxplot.box.y1}
        width={boxplot.box.x2}
        height={boxplot.box.y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
        rx={rx}
        ry={ry}
      />
      <line
        className="vx-boxplot-min-to-first"
        x1={boxplot.minToFirst.x1}
        y1={boxplot.minToFirst.y1}
        x2={boxplot.minToFirst.x2}
        y2={boxplot.minToFirst.y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        className="vx-boxplot-min"
        x1={boxplot.min.x1}
        y1={boxplot.min.y1}
        x2={boxplot.min.x2}
        y2={boxplot.min.y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </Group>
  );
};
