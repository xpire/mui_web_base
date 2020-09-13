import React from "react";
import Card from "@material-ui/core/Card";
import Page from "./Page";
import { Typography } from "@material-ui/core";
import Chart from "react-google-charts";

const AboutPage = () => {
  const [data, setData] = React.useState<(string | number)[][]>([[]]);

  const generateData = () => Math.floor(Math.random() * 1000 + 1);

  React.useEffect(() => {
    setInterval(() => {
      console.log("generating data");
      var myData = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ].map((elem) => [
        elem,
        generateData(),
        generateData(),
        generateData(),
        generateData(),
      ]);
      myData.unshift(["day", "a", "b", "c", "d"]);
      setData(myData);
    }, 4000);
  }, []);

  return (
    <Page>
      <Card>
        <Typography variant="h1">This is the About Page</Typography>
        <Typography>
          ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum.
        </Typography>

        <Typography>
          ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum.
        </Typography>

        <Typography>
          ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem dorum. ipsem
          dorum.
        </Typography>
        <Chart
          width={"100%"}
          height={350}
          chartType="CandlestickChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            legend: "none",
            animation: {
              duration: 200,
              easing: "out",
              startup: true,
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    </Page>
  );
};

export default AboutPage;
