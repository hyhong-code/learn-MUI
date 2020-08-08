import React, { Fragment } from "react";
import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true, // Disable Delay
    threshold: 0, // How far user scrolls to trigger
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0, // 0 = flat
  });
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, // To push content below AppBar
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h3">Arc Development</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
