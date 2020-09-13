import React from "react";
import { Group } from "@vx/group";
import { ViolinPlot, BoxPlot } from "@vx/stats";
import { LinearGradient } from "@vx/gradient";
import { scaleBand, scaleLinear } from "@vx/scale";
import genStats, { Stats } from "@vx/mock-data/lib/generators/genStats";
import {
  withTooltip,
  Tooltip,
  defaultStyles as defaultTooltipStyles,
} from "@vx/tooltip";
import { WithTooltipProvidedProps } from "@vx/tooltip/lib/enhancers/withTooltip";
import { PatternLines } from "@vx/pattern";

const data: Stats[] = genStats(5);

// accessors
const x = (d: Stats) => d.boxPlot.x;
const min = (d: Stats) => d.boxPlot.min;
const max = (d: Stats) => d.boxPlot.max;
const median = (d: Stats) => d.boxPlot.median;
const firstQuartile = (d: Stats) => d.boxPlot.firstQuartile;
const thirdQuartile = (d: Stats) => d.boxPlot.thirdQuartile;
const outliers = (d: Stats) => d.boxPlot.outliers;

interface TooltipData {
  name?: string;
  min?: number;
  median?: number;
  max?: number;
  firstQuartile?: number;
  thirdQuartile?: number;
}

export type StatsPlotProps = {
  width: number;
  height: number;
};

export default withTooltip<StatsPlotProps, TooltipData>(
  ({
    width,
    height,
  }: StatsPlotProps & WithTooltipProvidedProps<TooltipData>) => {
    // bounds
    const xMax = width;
    const yMax = height - 120;

    // scales
    const xScale = scaleBand<string>({
      range: [0, xMax],
      round: true,
      domain: data.map(x),
      padding: 0.4,
    });

    const values = data.reduce((allValues, { boxPlot }) => {
      allValues.push(boxPlot.min, boxPlot.max);
      return allValues;
    }, [] as number[]);
    const minYValue = Math.min(...values);
    const maxYValue = Math.max(...values);

    const yScale = scaleLinear<number>({
      range: [yMax, 0],
      round: true,
      domain: [minYValue, maxYValue],
    });

    const boxWidth = xScale.bandwidth();
    const constrainedWidth = Math.min(40, boxWidth);

    return width < 10 ? null : (
      <div style={{ position: "relative" }}>
        <svg width={width} height={height}>
          <LinearGradient id="statsplot" to="#8b6ce7" from="#87f2d4" />
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="url(#statsplot)"
            rx={14}
          />
          <PatternLines
            id="hViolinLines"
            height={3}
            width={3}
            stroke="#ced4da"
            strokeWidth={1}
            // fill="rgba(0,0,0,0.3)"
            orientation={["horizontal"]}
          />
          <Group top={40}>
            {data.map((d: Stats, i) => (
              <g key={i}>
                <BoxPlot
                  min={min(d)}
                  max={max(d)}
                  left={xScale(x(d))! + 0.3 * constrainedWidth}
                  firstQuartile={firstQuartile(d)}
                  thirdQuartile={thirdQuartile(d)}
                  median={median(d)}
                  boxWidth={constrainedWidth * 0.4}
                  fill="#FFFFFF"
                  fillOpacity={0.3}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  valueScale={yScale}
                  outliers={outliers(d)}
                />
              </g>
            ))}
          </Group>
        </svg>
      </div>
    );
  }
);
