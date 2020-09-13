import React from "react";

// vx
import { Group } from "@vx/group";
import { scaleUtc, ScaleInput, coerceNumber } from "@vx/scale";
import { Orientation, SharedAxisProps, AxisScale } from "@vx/axis";
import {
  AnimatedAxis,
  AnimatedGridRows,
  AnimatedGridColumns,
} from "@vx/react-spring";
// import { timeFormat } from "d3-time-format";

import { SingleCandleStickPlotVX } from "./SingleCandleStickPlotVX";

import * as data from "./sample.json";

const convertUnixTimestampToDate = (ut: number) => new Date(ut * 1000);

const dataPoints = data.t.map((elem, index) => {
  return {
    t: convertUnixTimestampToDate(elem),
    o: data.o[index],
    h: data.h[index],
    l: data.l[index],
    c: data.c[index],
    v: data.v[index],
  };
});

export type FinnhubData = {
  o: number;
  h: number;
  l: number;
  c: number;
  v?: number;
  t: number;
  s?: string;
};

export type VXPlotProps = {
  width: number;
  height: number;
};

export const CandleStickPlotVX = ({
  data,
  width,
  height,
}: {
  data: FinnhubData;
} & VXPlotProps) => {
  const xMax = width;
  const yMax = height - 120;
  return <></>;
};

export const CandleStickPlotReactVis = ({ data }: { data: FinnhubData }) => {
  // const width = outerWidth - margin.left - margin.right;
  // const height = outerHeight - margin.top - margin.bottom;
  return <></>;
};
