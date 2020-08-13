import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import Revolution from "./Revolution";
import About from "./About";
import Contact from "./Conatact";
import Estimate from "./Estimate";
import Theme from "./ui/Theme";

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <LandingPage
                {...routeProps}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(routeProps) => (
              <Services
                {...routeProps}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(routeProps) => (
              <CustomSoftware
                {...routeProps}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(routeProps) => (
              <MobileApps
                {...routeProps}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/websites"
            render={(routeProps) => (
              <Websites
                {...routeProps}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/revolution"
            render={(routeProps) => (
              <Revolution
                {...routeProps}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route
            exact
            path="/about"
            render={(routeProps) => <About {...routeProps} />}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
          />
          <Route
            exact
            path="/contact"
            render={(routeProps) => (
              <Contact
                {...routeProps}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/estimate"
            render={(routeProps) => (
              <Estimate
                {...routeProps}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
