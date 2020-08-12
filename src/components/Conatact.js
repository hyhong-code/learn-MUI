import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "./ui/ButtonArrow";
import mobileBackground from "../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendBtn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const Conatact = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (evt) => {
    const { value, id } = evt.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    let isValid;
    if (id === "email") {
      isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
      if (!isValid) {
        setEmailHelper("Invalid email");
      } else {
        setEmailHelper("");
      }
    } else if (id === "phone") {
      isValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
        value
      );
      if (!isValid) {
        setPhoneHelper("Invalid phone");
      } else {
        setPhoneHelper("");
      }
    }
  };

  const { name, email, phone, message } = formData;

  return (
    <Grid container direction="row">
      <Grid
        item
        lg={4}
        xl={3}
        justify="center"
        alignItems="center"
        container
        direction="column"
        style={{
          marginBottom: matchesMD ? "5rem" : 0,
          marginTop: matchesSM ? "1rem" : matchesMD ? "5rem" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <a
                  href="tel:5555555555"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      color: theme.palette.common.blue,
                      fontSize: "1rem",
                    }}
                  >
                    (555) 555-5555
                  </Typography>
                </a>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="email"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <a
                  href="mailto:hong961127@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      color: theme.palette.common.blue,
                      fontSize: "1rem",
                    }}
                  >
                    hong961127@gmail.com
                  </Typography>
                </a>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  error={!!emailHelper}
                  helperText={emailHelper}
                  label="Email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  error={!!phoneHelper}
                  helperText={phoneHelper}
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                fullWidth
                value={message}
                id="message"
                onChange={handleChange}
                multiline
                rows={10}
                className={classes.message}
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                className={classes.sendBtn}
                disabled={
                  !(
                    name &&
                    email &&
                    phone &&
                    message &&
                    !emailHelper &&
                    !phoneHelper
                  )
                }
                onClick={() => setOpen(true)}
              >
                Send Message{" "}
                <img
                  src={airplane}
                  alt="airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1302 }}
        fullScreen={matchesXS ? true : false}
        PaperProps={{
          style: {
            padding: matchesXS
              ? `1em 1em`
              : matchesSM
              ? `1em 3em`
              : matchesMD
              ? `2em 5em`
              : `5em 10em`,
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                label="Name"
                id="name"
                value={name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={!!emailHelper}
                helperText={emailHelper}
                label="Email"
                id="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={!!phoneHelper}
                helperText={phoneHelper}
                label="Phone"
                id="phone"
                value={phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
            <TextField
              fullWidth
              value={message}
              id="message"
              onChange={handleChange}
              multiline
              rows={10}
              className={classes.message}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: "2em" }}
            alignItems="center"
            direction={matchesSM ? "column" : "row"}
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                onClick={() => setOpen(false)}
                color="primary"
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendBtn}
                disabled={
                  !(
                    name &&
                    email &&
                    phone &&
                    message &&
                    !emailHelper &&
                    !phoneHelper
                  )
                }
                onClick={() => setOpen(true)}
              >
                Send Message{" "}
                <img
                  src={airplane}
                  alt="airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Grid
        item
        lg={8}
        xl={9}
        container
        justify={matchesMD ? "center" : undefined}
        className={classes.background}
        alignItems="center"
        direction={matchesMD ? "column" : "row"}
      >
        <Grid item style={{ marginLeft: matchesMD ? 0 : "3em" }}>
          <Grid container direction="column">
            <Grid item style={{ textAlign: matchesMD ? "center" : undefined }}>
              <Typography variant="h2">
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Take advantage of the 21st Century.
              </Typography>
              <Grid container justify={matchesMD ? "center" : undefined} item>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => setValue(false)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Conatact;
