import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: ".75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4rem",
    width: "4rem",
    [theme.breakpoints.down("xs")]: {
      height: "2.5rem",
      width: "2.5rem",
    },
  },
  socialContainer: {
    position: "Absolute",
    marginTop: "-6rem",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: ".6em",
    },
  },
}));

const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/"
                onClick={() => setValue(0)}
                item
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                item
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                item
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                item
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                component={Link}
                to="/websites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                item
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                item
                className={classes.link}
              >
                Revolution
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                item
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                item
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                item
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
                item
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid component={Link} to="/about" item className={classes.link}>
                History
              </Grid>
              <Grid component={Link} to="/about" item className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/contact"
                onClick={() => setValue(4)}
                item
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={footerAdornment}
        alt="footer adornment"
        className={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className={classes.icon} src={facebook} alt="facebook logo" />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className={classes.icon} src={twitter} alt="twitter logo" />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className={classes.icon} src={instagram} alt="instagram logo" />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
