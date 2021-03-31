import React, { useState } from "react";
import {
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./App.css";
import AppBarCollapse from "./AppBar/AppBarCollapse";
import { ClientCarousel } from "./clientCarousel";
import BackToTop from "./ScrollToTop";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { CarouselTop } from "./Carousel";
import { Description } from "./Description";
import { USP } from "./USP";
import { Client } from "./Client";
import { AboutUs } from "./Pages/AboutUs";
import { OurProducts } from "./Pages/OurProducts";

function Example(props) {
  const items = [
    {
      headingFirstLine: "Save Today",
      headingSecondLine: "Rejoice Tomorrow",
      description:
        "Be more intelligent in Saving Water and Make wiser use of irrigation System",
      image: "drip-irrigation-pipe-making-machine-1510658903-3451778.png",
    },
    {
      headingFirstLine: "Save Today 1",
      headingSecondLine: "Rejoice Tomorrow 1",
      description:
        "Be more intelligent in Saving Water and Make wiser use of irrigation System",
      image:
        "industrial-estate-refinery-factory-oil-storage-tank-petrochemical-plant-area-with-beautify-sky-sunset.jpg",
    },
  ];

  const socialMediaIcon = [
    <FacebookIcon color="inherit" />,
    <InstagramIcon color="inherit" />,
    <YouTubeIcon color="inherit" />,
    <TwitterIcon color="inherit" />,
    <LinkedInIcon color="inherit" />,
  ];

  const menuList = [
    <Link className="menu-item" to='/'>HOME</Link>,
    <Link className="menu-item" to="/about">ABOUT US</Link>,
    <Link className="menu-item" to="/products">PRODUCTS</Link>,
    <Link className="menu-item" to="/gallery">GALLERY</Link>,
    <Link className="menu-item" to="/contact-us">CONTACT US</Link>,
  ];

  function ListItemLink(props) {
    return <ListItem style={{margin:0, padding:0}} button component="a" {...props} />;
  }

  const styles = {
    blueBackground: {
      background: "#243f64",
      color: "white",
    },
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <BrowserRouter>
      {/*------------------------------------ Header start ----------------------------------------*/}
      <Grid container item xs={12} className="header" justify="center">
        <Grid md={2} xs={0}></Grid>
        <Grid item md={5} xs={8} pt="10px">
          <span id="back-to-top-anchor">
            Call us : +91 98260 62225, 95848 62225 | Toll Free : 1800 8896 521
          </span>
        </Grid>
        <Grid md={2} xs={0}></Grid>
        <Grid item xs={4} md={3}>
          <AppBarCollapse
            classes={{ buttonBar: "headerColor" }}
            menuItem={socialMediaIcon}
          />
        </Grid>
      </Grid>
      {/*------------------------------------  Header  End ----------------------------------------*/}

      {/*------------------------------------  Logo and Menu Start ----------------------------------------*/}

      <Grid container item xs={12}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}assets/images/Nilam Industries Logo-01.png`}
            alt="Nilam Industries"
          />
        </Grid>
        <Grid xs={5} md={2} />
        <Grid item xs={1} md={5}>
          <Box display="flex" alignItems="center" style={{ height: "100%" }}>
            <AppBarCollapse menuItem={menuList} />
          </Box>
        </Grid>
      </Grid>

      {/*------------------------------------  Logo and Menu  End  ----------------------------------------*/}
      <Switch>
          <Route path="/about">
            <AboutUs/>
          </Route>
          <Route path="/products">
            <OurProducts/>
          </Route>
          <Route path="/gallery">
            <h1>Gallery</h1>
          </Route>
          <Route path="/contact-us">
            <h1>Contact Us</h1>
          </Route>
          <Route path="/">
            <CarouselTop items={items}></CarouselTop>
            <Description></Description>
            <USP></USP>
            <Client></Client>
          </Route>
        </Switch>
      

      {/*------------------------------------ Footer Start ----------------------------------------*/}
      <Grid
      container
      item
      xs={12}
      style={styles.blueBackground}
      justify='center'
      spacing='6'
      >
        <Grid container item xs={12} sm={10} md={3}>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}assets/images/Nilam Industries Logo-01.png`}
            alt="Nilam Industries"
          />
          <p>Nilam Industries is one of the best organizations you will find in the Madhya Pradesh Region for handling drip irrigation system. We are the serving as the manufacturer of all the drip irrigation best quality Machines.</p>
          </Grid>
        <Grid container item xs={12} sm={10} md={3} justify={'center'}>
          <Grid xs={12} justify={'center'}><h3 style={{textAlign:"center", marginBottom: 0}}>Quick Links</h3></Grid>
          <Grid xs={12} justify={'center'}>
          <List component="nav" aria-label="quick links" disableGutters  style={{"padding-top":0,"paddingBottom":0, margin:0}}>
        <ListItemLink href="/">
          <ListItemText style={{textAlign:"center"}} primary="Home" />
        </ListItemLink>
        <ListItemLink href="/about">
          <ListItemText style={{textAlign:"center", "padding-top":0,"paddingBottom":0}} primary="About Us" />
        </ListItemLink><ListItemLink href="/products">
          <ListItemText style={{textAlign:"center", "padding-top":0,"paddingBottom":0}} primary="Products" />
        </ListItemLink><ListItemLink href="gallery">
          <ListItemText style={{textAlign:"center", "padding-top":0,"paddingBottom":0}} primary="Gallery" />
        </ListItemLink><ListItemLink href="contact-us">
          <ListItemText style={{textAlign:"center", "padding-top":0,"paddingBottom":0}} primary="Contact Us" />
        </ListItemLink>
      </List>
          
          </Grid>
          </Grid>
        <Grid container item xs={12} sm={10} md={3}>
          <Grid xs={12}>
            <h3 style={{textAlign:"center", marginBottom: 0}}>Contact Us</h3>
          </Grid>
          <Grid xs={12} style={{textAlign:"justify", margin: 0, padding: 0}}>
            <p>Plot No. A-1, Near Balaji Toll Kanta, Nagziri, Industrial Area, Dewas Road, Ujjain (M.P.) INDIA - 456010</p>
          </Grid>
          <Grid xs={12}>
            <a className="phone" href="tel:+919826062225">+91 98260 62225</a>, <a className="phone" href="tel:+919584862225">95848 62225</a>
          </Grid>
          <Grid xs={12}>
            <span>Toll Free No.: <a className="phone" href="tel:1800 8896 521">1800 8896 521</a></span>
          </Grid>
          <Grid>
            <a className="phone" href="mailto:nilamindustries@gmail.com">nilamindustries@gmail.com</a>
          </Grid>
          <Grid>
            <a className="phone" href="http://www.nilamindustries.com/">http://www.nilamindustries.com/</a>
          </Grid>
        </Grid>
      </Grid>
      <BackToTop></BackToTop>
      {/*------------------------------------ Footer End ----------------------------------------*/}
      </BrowserRouter>
    </Grid>
  );



}


const App = Example;
export default App;
