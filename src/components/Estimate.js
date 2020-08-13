import React, { Fragment, useState } from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import { cloneDeep } from "lodash";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";
import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "3em",
    marginBottom: "2em",
    borderRadius: 5,
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.orange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    subtitle: null,
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website development",
        subtitle: null,
        icon: website,
        iconAlt: "websites",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: estimateAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [total, setTotal] = useState(0);

  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [category, setCategory] = useState([]);
  const [users, setUsers] = useState("");

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const prevQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const prevIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[prevIndex] = { ...newQuestions[prevIndex], active: true };
    setQuestions(newQuestions);
  };

  const navigationPrevDisabled = () => {
    const currentlyActive = questions.find((question) => question.active);
    if (currentlyActive.id === 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.find((question) => question.active);
    if (currentlyActive.id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];
    const prevSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (prevSelected[0]) {
          prevSelected[0].selected = !prevSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }
    switch (newSelected.title) {
      case "Custom Software Development":
        setService(newSelected.title);
        setQuestions(softwareQuestions);
        break;
      case "iOS/Android App Development":
        setService(newSelected.title);
        setQuestions(softwareQuestions);
        break;
      case "Website development":
        setService(newSelected.title);
        setQuestions(websiteQuestions);
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  };

  const INITIAL_FORM_STATE = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const { name, email, phone, message } = formData;

  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

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

  const getTotal = () => {
    let cost = 0;
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.forEach((options) =>
      options.forEach((option) => (cost += option.cost))
    );

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];
      setUsers(userCost.title);
      cost -= userCost.cost;
      cost *= userCost.cost;
    }
    setTotal(cost);
  };

  const getPlatforms = () => {
    let newPlatforms = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));
    }
    setPlatforms(newPlatforms);
  };

  const getFeatures = () => {
    let newFeatures = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );
    }
    setFeatures(newFeatures);
  };

  const getCustomFeatures = () => {
    // if (questions.length > 2) {
    //   const newCustomFeatures = questions
    //     .filter(
    //       (question) =>
    //         question.title ===
    //         "Which type of custom features do you expect to need?"
    //     )
    //     .map((question) =>
    //       question.options.filter((option) => option.selected)
    //     )[0][0].title;
    //   setCustomFeatures(newCustomFeatures);
    // }
  };

  return (
    <Grid container>
      <Grid
        item
        lg
        container
        direction="column"
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{ marginTop: "2em", marginLeft: matchesMD ? 0 : "5em" }}
        >
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid item>
          <Lottie
            options={defaultOptions}
            height="100%"
            width="100%"
            style={{
              marginRight: matchesMD ? 0 : "10em",
              maxWidth: "50em",
              marginTop: "7.5em",
            }}
          ></Lottie>
        </Grid>
      </Grid>
      <Grid
        item
        lg
        alignItems="center"
        container
        direction="column"
        style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, idx) => (
            <Fragment key={idx}>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    marginTop: "5em",
                    fontSize: "2.25em",
                    lintHeight: 1.25,
                    marginLeft: matchesSM ? "1em" : 0,
                    marginRight: matchesSM ? "1em" : 0,
                  }}
                  gutterBottom
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option, idx) => (
                  <Grid
                    key={idx}
                    item
                    md
                    container
                    direction="column"
                    component={Button}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 0,
                      marginBottom: matchesSM ? "1.5em" : 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : undefined,
                    }}
                    onClick={() => handleSelect(option.id)}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        className={classes.icon}
                        src={option.icon}
                        alt={option.iconAlt}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Fragment>
          ))}

        <Grid
          item
          container
          justify="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              onClick={prevQuestion}
              disabled={navigationPrevDisabled()}
            >
              <img
                src={navigationPrevDisabled() ? backArrowDisabled : backArrow}
                alt="back"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={nextQuestion}
              disabled={navigationNextDisabled()}
            >
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="forward"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        // PaperProps={{ style: { padding: "5em 25em 5em 25em" } }}
        fullWidth
        maxWidth="lg"
        fullScreen={matchesSM}
        style={{ zIndex: 1302 }}
      >
        <Grid
          container
          justify="center"
          direction={matchesSM ? "column" : "row"}
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container justify="space-around">
            <Grid
              item
              md={7}
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
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  We can create this digital solution for an estimated{" "}
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  culpa at recusandae inventore ducimus quia.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={5}
              container
              direction="column"
              style={{ maxWidth: "30em" }}
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <Hidden smDown>
                  <Grid
                    container
                    direction="column"
                    style={{ marginTop: "14em" }}
                  >
                    <Grid
                      item
                      container
                      alignItems="center"
                      style={{ marginBottom: "1.5em" }}
                    >
                      <Grid item xs={2}>
                        <img src={check} alt="checkmark" />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="body1">
                          You want {service}
                          {platforms.length > 0
                            ? `for ${
                                //if only web application is selected...
                                platforms.indexOf("Web Application") > -1 &&
                                platforms.length === 1
                                  ? //then finish sentence here
                                    "a Web Application."
                                  : //otherwise, if web application and another platform is selected...
                                  platforms.indexOf("Web Application") > -1 &&
                                    platforms.length === 2
                                  ? //then finish the sentence here
                                    `a Web Application and an ${platforms[1]}.`
                                  : //otherwise, if only one platform is selected which isn't web application...
                                  platforms.length === 1
                                  ? //then finish the sentence here
                                    `an ${platforms[0]}`
                                  : //otherwise, if other two options are selected...
                                  platforms.length === 2
                                  ? //then finish the sentence here
                                    "an iOS Application and an Android Application."
                                  : //otherwise if all three are selected...
                                  platforms.length === 3
                                  ? //then finish the sentence here
                                    "a Web Application, an iOS Application, and an Android Application."
                                  : null
                              }`
                            : null}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      alignItems="center"
                      style={{ marginBottom: "1.5em" }}
                    >
                      <Grid item xs={2}>
                        <img src={check} alt="checkmark" />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="body1">
                          {"with "}
                          {/* if we have features... */}
                          {features.length > 0
                            ? //...and there's only 1...
                              features.length === 1
                              ? //then end the sentence here
                                `${features[0]}.`
                              : //otherwise, if there are two features...
                              features.length === 2
                              ? //...then end the sentence here
                                `${features[0]} and ${features[1]}.`
                              : //otherwise, if there are three or more features...
                                features
                                  //filter out the very last feature...
                                  .filter(
                                    (feature, index) =>
                                      index !== features.length - 1
                                  )
                                  //and for those features return their name...
                                  .map((feature, index) => (
                                    <span key={index}>{`${feature}, `}</span>
                                  ))
                            : null}
                          {features.length > 0 &&
                          features.length !== 1 &&
                          features.length !== 2
                            ? //...and then finally add the last feature with 'and' in front of it
                              ` and ${features[features.length - 1]}.`
                            : null}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems="center">
                      <Grid item xs={2}>
                        <img src={check} alt="checkmark" />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="body1">
                          The custom features will be of Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Sequi, nihil.
                          {/* {customFeatures.toLowerCase()}
                        {`, and the project will be used by about ${users}`} */}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Place Request{" "}
                  <img
                    src={send}
                    alt="paper airplane"
                    style={{ marginLeft: "0.5em" }}
                  />
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid item style={{ marginBottom: matchesSM ? "5em" : 0 }}>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Estimate;
