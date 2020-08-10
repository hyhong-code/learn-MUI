import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Lottie from "react-lottie";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import vision from "../assets/vision.svg";
import techAnimation from "../animations/technologyAnimation/data.json";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import design from "../assets/designIcon.svg";
import review from "../assets/reviewIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: techAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            width="100%"
            src={vision}
            alt="vision"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          />
        </Grid>
        <Grid item lg container direction="column" style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : "right"}
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              voluptates ea repellendus earum!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              ipsum aspernatur, dolorum eveniet necessitatibus quisquam sit
              nesciunt! Omnis dicta, quia ea inventore quo voluptate ipsa.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quibusdam a sit numquam voluptas consectetur minima explicabo
              exercitationem nesciunt veniam nobis pariatur neque magni in
              perferendis, architecto delectus!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              sint, ab eius ea ratione sequi magnam suscipit iure.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quas esse officiis suscipit debitis aperiam sequi fugit quia?
              Sapiente, ut.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item lg container direction="column" style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam sunt deleniti provident eaque minus, exercitationem
              omnis ipsam error id. Eum, dicta?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              reiciendis maxime repudiandae cupiditate?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus enim sit praesentium. Aliquid dignissimos dolor
              reprehenderit itaque labore vero?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              tenetur commodi atque harum sit repellat?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              quos sunt, optio vel recusandae cupiditate rem non saepe.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg container justify={matchesMD ? "center" : "flex-end"}>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#b3b3b3", height: "90em" }}
      >
        <Grid
          item
          lg
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              eaque recusandae labore unde. Quos at quo debitis voluptatum!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique placeat consectetur qui dolores, et nobis nemo obcaecati
              ipsam deserunt non numquam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              perspiciatis.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={consultation}
            alt="consultation"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#ff7373", height: "90em" }}
      >
        <Grid
          item
          lg
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              reiciendis exercitationem nobis. Dolore, cum veritatis! Facere
              consectetur ab non enim mollitia modi quaerat atque blanditiis.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              aliquam accusantium officiis nulla dolor praesentium blanditiis
              qui. Voluptas ad eos itaque. Alias nulla delectus laborum ex
              suscipit vitae?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              harum non nemo, deleniti amet reiciendis repellat illo veniam?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={mockup}
            alt="mockup"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid
          item
          lg
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint
              ducimus quaerat doloremque facere, laudantium doloribus aut
              similique reiciendis recusandae voluptates totam tenetur assumenda
              mollitia.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              odio, dicta maxime quis eius minus aliquid at voluptatibus magnam
              quae tempora enim! Ea iste dicta error corrupti quasi voluptas
              culpa.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={design}
            alt="design"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#a67c52", height: "90em" }}
      >
        <Grid
          item
          lg
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              corporis et quia nulla tempore ab assumenda veritatis. Modi, quo
              sed.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
              error ab distinctio dolores ullam reiciendis voluptatem quidem
              dolorem dignissimos eveniet, quis magnam quas aut.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img width="100%" src={review} alt="review" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid
          item
          lg
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum id
              sapiente odit ab minus delectus dolorum voluptates repudiandae
              corporis illo.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              accusamus excepturi officiis soluta eos eaque.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              sit debitis! Corrupti non magni unde.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={build}
            alt="build"
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#fbb03b", height: "90em" }}
      >
        <Grid
          item
          lg
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum id
              sapiente odit ab minus delectus dolorum voluptates repudiandae
              corporis illo.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              accusamus excepturi officiis soluta eos eaque.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              sit debitis! Corrupti non magni unde.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={launch}
            alt="launch"
            style={{ maxWidth: 200 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#c1272d", height: "90em" }}
      >
        <Grid
          item
          lg
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum id
              sapiente odit ab minus delectus dolorum voluptates repudiandae
              corporis illo.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              accusamus excepturi officiis soluta eos eaque.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              sit debitis! Corrupti non magni unde.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={maintain}
            alt="maintain"
            style={{ maxWidth: 500 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29abe2", height: "90em" }}
      >
        <Grid
          item
          lg
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum id
              sapiente odit ab minus delectus dolorum voluptates repudiandae
              corporis illo.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              accusamus excepturi officiis soluta eos eaque.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              sit debitis! Corrupti non magni unde.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img width="100%" src={iterate} alt="iterate" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
