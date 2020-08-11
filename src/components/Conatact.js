import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({}));

const Conatact = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="row">
      <Grid item container direction="column"></Grid>
      <Grid item container></Grid>
    </Grid>
  );
};

export default Conatact;
