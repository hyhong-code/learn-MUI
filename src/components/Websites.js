import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  paragraphyContainer: {
    maxWidth: "30em",
  },
}));

const Websites = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "-3.5em", marginRight: "1em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img src={backArrow} alt="Back to mobile page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              fugiat laudantium neque reprehenderit tempore nostrum obcaecati
              pariatur et. Voluptatibus, facilis dicta. Fugit iure velit ex!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              excepturi? Beatae dicta reprehenderit odit. Officia quos dolor
              modi veritatis aperiam!
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt="Forward to iOS / Android page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="magnifying glasses"
                style={{ marginLeft: "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphyContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            doloribus ex reiciendis officia est. Voluptas!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="ecommerce" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphyContainer}
        >
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            veritatis?
          </Typography>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            accusamus dolores praesentium iure, sed asperiores!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphyContainer}
        >
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            soluta ut nesciunt, libero, ex mollitia blanditiis saepe eligendi
            sequi quae dignissimos rem? Exercitationem?
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Seach Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="SEO" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphyContainer}
        >
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            voluptatum?
          </Typography>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            facilis tenetur accusamus?
          </Typography>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            quam sed hic recusandae labore cum!
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
