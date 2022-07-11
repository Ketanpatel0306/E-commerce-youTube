import React, { Children } from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

 const LayOut = ({Children}) => {
  return (
    <div>
      <Head>
        <title>Next E-Commerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container>{Children}</Container>
      <footer>
        <Typography>
          All rights
        </Typography>
      </footer>
    </div>
  );
};
export default LayOut;