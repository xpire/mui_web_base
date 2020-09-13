import React from "react";
import Page from "./Page";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import CandlestickExample from "../candlestick/candlestick-example";

const LoginPage = () => {
  return (
    <Page>
      <Card>
        <Typography variant="h1">This is the Login Page</Typography>
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
      </Card>
      <Card>
        <CandlestickExample />
      </Card>
    </Page>
  );
};

export default LoginPage;
