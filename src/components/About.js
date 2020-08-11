import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "./ui/CallToAction";
import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

const About = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          className={classes.missionStatement}
          align="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora fuga
          similique laborum fugit perspiciatis quibusdam consequatur
          exercitationem nostrum ratione cum neque sed cumque vitae, obcaecati,
          non dicta maiores! Cupiditate, provident?
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justify="space-around"
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid container direction="column" style={{ maxWidth: "35em" }}>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesMD ? "center" : undefined}
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
                align={matchesMD ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo similique incidunt voluptatem totam quasi, ipsa omnis
                praesentium modi consequatur, iste officiis suscipit nostrum?
                Perspiciatis rerum molestias dolore fuga reprehenderit enim!
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti tempore blanditiis porro! Maxime quos libero corrupti
                enim debitis incidunt hic!
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestiae, vitae!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center">
            <img
              src={history}
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
              alt="history"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Denny Hong, Developer
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Humble, eager to learn, strong work ethics.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="Founder"
            src={profile}
            className={classes.avatar}
          ></Avatar>
        </Grid>
        <Grid
          item
          container
          justify={matchesMD ? "center" : undefined}
          style={{ marginBottom: "15em" }}
        >
          <Grid
            item
            lg
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
            style={{
              order: matchesMD ? 2 : 1,
              marginBottom: matchesMD ? "2.5em" : 0,
            }}
          >
            <Grid item>
              <img
                src={yearbook}
                alt="yearbook page about founder"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            lg
            style={{
              maxWidth: "45em",
              padding: "1.25em",
              order: matchesMD ? 1 : 2,
            }}
          >
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              ipsa, nisi excepturi exercitationem aut consequatur.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores sunt eos pariatur incidunt neque ex nobis quo illo enim
              beatae?
            </Typography>
          </Grid>

          <Grid
            item
            lg
            container
            direction="column"
            alignItems={matchesMD ? "center" : "flex-end"}
            style={{ order: 3 }}
          >
            <Grid item>
              <img
                src={puppy}
                alt="puppy"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Lorem ipsum dolor sit amet, consectetur.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default About;
