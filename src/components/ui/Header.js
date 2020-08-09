import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import useMeidaQuery from "@material-ui/core/useMediaQuery";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";

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
    marginBottom: "3em", // Offset added logo height
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 25,
    height: 45,
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "#fff",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  drawerIcon: {
    height: 50,
    width: 50,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const menuOptions = [
  { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
  {
    name: "Custom Software Development",
    link: "/customsoftware",
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: "Mobile App Development",
    link: "/mobileapps",
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    name: "Website Development",
    link: "/websites",
    activeIndex: 1,
    selectedIndex: 3,
  },
];

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMeidaQuery(theme.breakpoints.down("md"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case route.link:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, []);

  const handleChange = (evt, newValue) => {
    setValue(newValue); // Setup click change tab, evt is required
  };

  const handleClick = (evt) => {
    setAnchorEl(evt.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (evt) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (idx) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(idx);
  };

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "service-menu" : undefined,
      ariaHasPopup: anchorEl ? "true" : undefined,
      onMouseOver: (evt) => handleClick(evt),
    },
    { name: "Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route, idx) => (
          <Tab
            key={idx}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaHasPopup}
            onMouseOver={route.onMouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/estimate"
        className={classes.button}
      >
        Free Estimate
      </Button>
      <Menu
        id="service-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        elevation={0}
        MenuListProps={{ onMouseLeave: handleClose }} // Props applied to the MenuList element.
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, idx) => (
          <MenuItem
            key={idx}
            onClick={() => {
              handleMenuItemClick(idx);
              setValue(1);
            }}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            selected={idx === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.activeIndex}
              divider
              button
              component={Link}
              to={route.link}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            selected={value === 5}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer((prev) => !prev)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
