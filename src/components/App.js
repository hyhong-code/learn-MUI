import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./ui/Header";
import Theme from "./ui/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
};

export default App;
