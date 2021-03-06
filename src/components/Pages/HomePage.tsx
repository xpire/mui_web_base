import React from "react";
import Page from "./Page";
import { Typography, Container, Card } from "@material-ui/core";

import CandleStickPlotVictory from "../Plots/Victory";
import CandleStickPlotApex from "../Plots/Apexcharts";
import { FinnhubData } from "../Plots/Victory";
import * as data from "../Plots/sample.json";
import * as data2 from "../Plots/sample2.json";
// import * as data2 from "../Plots/sample3.json";

const HomePage = () => {
  const convertUnixTimestampToDate = (ut: number) => new Date(ut * 1000);

  const dataPoints = data.t.map((elem: any, index: number) => {
    return {
      t: convertUnixTimestampToDate(elem),
      o: data.o[index],
      h: data.h[index],
      l: data.l[index],
      c: data.c[index],
    };
  });
  const dataPoints2 = data2.t.map((elem: any, index: number) => {
    return {
      t: convertUnixTimestampToDate(elem),
      o: data2.o[index],
      h: data2.h[index],
      l: data2.l[index],
      c: data2.c[index],
    };
  });

  const apexPoints = data.t.map((elem, index) => {
    return {
      x: convertUnixTimestampToDate(elem),
      y: [data.o[index], data.h[index], data.l[index], data.c[index]],
    };
  });

  const apexPoints2 = data2.t.map((elem, index) => {
    return {
      x: convertUnixTimestampToDate(elem),
      y: [data2.o[index], data2.h[index], data2.l[index], data2.c[index]],
    };
  });

  const [dataset, setDataset] = React.useState(true);
  return (
    <Page>
      <Card>
        <Container maxWidth="sm" component="main">
          <Typography variant="h2">Welcome to my visualisation Demo</Typography>

          <Typography variant="h5">
            This is just a super basic material-ui based react project I threw
            together, go to the other pages for the graphs :D
          </Typography>
        </Container>
        {/* <CandleStickPlotVictory data={dataset ? dataPoints : dataPoints2} /> */}
        <button
          onClick={() => {
            setDataset(!dataset);
          }}
        >
          Increase
        </button>
        <CandleStickPlotApex series={dataset ? apexPoints : apexPoints2} />
      </Card>
    </Page>
  );
};

export default HomePage;
