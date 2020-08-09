import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data";
import automationAnimation from "../animations/automationAnimation/data";
import uxAnimation from "../animations/uxAnimation/data";

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
  itemContainer: {
    maxWidth: "40em",
  },
}));

const documentsOptions = {
  loop: true,
  autoplay: true,
  animationData: documentsAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const scalesOptions = {
  loop: true,
  autoplay: true,
  animationData: scaleAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const automationOptions = {
  loop: true,
  autoplay: true,
  animationData: automationAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const uxOptions = {
  loop: true,
  autoplay: true,
  animationData: uxAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
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
              to="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to services page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              deleniti quas aut quidem modi magni.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              alias, omnis iste possimus unde voluptas ipsa quis placeat quia,
              asperiores et, consequatur fuga? Ducimus, ad!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              soluta id dolorem culpa. Cum aliquid vitae eveniet sequi voluptas
              quaerat aliquam modi, animi architecto dolorem ut voluptates fugit
              accusantium id!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              inventore, amet nostrum fugit optio quae officia.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img src={forwardArrow} alt="Forward to iOS / Android page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          md
          container
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          md
          container
          direction="column"
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          md
          container
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
        className={classes.rowContainer}
      >
        <Grid
          md
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item md container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                perferendis! Facilis vel necessitatibus vero quidem nobis
                suscipit fugit. Inventore obcaecati explicabo ab fuga, nesciunt
                minima.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                nostrum recusandae odio nisi deleniti aperiam harum corrupti eos
                aliquam culpa?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                nulla expedita dicta, excepturi corporis autem praesentium sequi
                ducimus magni eaque quasi animi aut.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          md
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={scalesOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item md container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus illo ullam dolore ea dolor natus, quos quod saepe
                debitis illum dolorum officiis, fugiat molestias iure vitae.
                Adipisci nulla sequi nesciunt.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="Tree with roots extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              voluptatum distinctio nisi ullam nostrum vel!
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident cum porro quo illum consectetur, consequatur
              repudiandae, blanditiis consequuntur, animi voluptates maiores. Ab
              ratione reprehenderit, animi consequuntur minus fugit quam
              deleniti?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
        style={{ marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          md
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item md container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, at officiis. Ipsam sunt blanditiis nemo eos saepe rem
                a. Cupiditate.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                non debitis dolores, qui molestias perspiciatis.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                vero. Dolores, sapiente non eos natus quia vitae neque
                recusandae, impedit magnam consequatur, sunt inventore et!
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          md
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item md container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem voluptatem aut nemo sunt? Neque facere quod
                possimus reprehenderit! Quos consequuntur dolor mollitia ex
                facere assumenda nobis laudantium fugit.
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

export default CustomSoftware;
