import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { Link } from "react-router-dom";
import {RiExchangeDollarLine} from "react-icons/ri";
import {MdRedeem} from "react-icons/md";
import { FiGrid } from "react-icons/fi";
import { GiTrade } from "react-icons/gi";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./responsiveDrawer.scss";
import Card from "../Card/Card";
import MainContent from "../MainContent/MainContent";
import { GiSellCard } from 'react-icons/gi'

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@material-ui/core";
import baba from "../../assets/images/baba.png";
import { HeadingContent_Button } from "../heading/HeadingContent_Button";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const [job, setjob] = useState(false);
  const [task, settask] = useState(false);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List>
        <ListItem className="sidebar_icons">
          <ListItemIcon className="baba_img">
            <img src={baba} alt="logo" />
          </ListItemIcon>
        </ListItem>
        <ListItem className="sidebar_icons user_box">
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Trvl user" secondary="trvl.com" />
      </ListItem>
        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <FiGrid className="font_job_si" />
          </ListItemIcon>
          <Link to="/">
            <ListItemText className="ttle_clr_ssbr" primary="Dashboard" />{" "}
          </Link>
        </ListItem>
        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <GiSellCard className="font_job_si" />
          </ListItemIcon>
          <Link to="/sell">
           <ListItemText className="ttle_clr_ssbr" primary="Sell" />
          </Link>
        </ListItem>
        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <GiTrade className="font_job_si" />
          </ListItemIcon>
          <Link to="/assets-sell">
            <ListItemText className="ttle_clr_ssbr" primary="Trade" />
          </Link>
        </ListItem>

        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <MdRedeem className="font_job_si" />
          </ListItemIcon>
          <Link to="/p2pmarketplace">
           <ListItemText primary="Redeem" className="jobs_clr" />
          </Link>
        </ListItem>

        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <RiExchangeDollarLine className="font_job_si" />
          </ListItemIcon>
          <Link to="/userdashboard">
            <ListItemText primary="T-share exchange " className="jobs_clr" />
          </Link>
        </ListItem>

        
        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <FiGrid className="font_job_si" />
          </ListItemIcon>
          <Link to="/userdashboard">
            
            <ListItemText
              className="ttle_clr_ssbr"
              primary="Setting"
            />
          </Link>
        </ListItem>
       
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography noWrap className="d-flex">
            <h4 className="swatada">Developers</h4>
            
          </Typography> */}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="content_container">
        
          <HeadingContent_Button />
          <Card />
          {/* <FormContent /> */}
          {/* <SellForm/> */}
          {/* <P2pMarketpalce /> */}
          {/* <AssetsSell /> */}
          <MainContent />
          
        </div>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
