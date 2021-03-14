import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Grid,
  Paper,
  Button,
  ThemeProvider,
  createMuiTheme,
  Box,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./App.css";
import gothamBold from "./assets/fonts/GothamBold.ttf";
import AppBarCollapse from "./AppBar/AppBarCollapse";
import { ClientCarousel } from "./clientCarousel";

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
    <span className="menu-item">HOME</span>,
    <span className="menu-item">ABOUT US</span>,
    <span className="menu-item">PRODUCTS</span>,
    <span className="menu-item">GALLERY</span>,
    <span className="menu-item">CONTACT US</span>,
  ];

  const styles = {
    paperContainer: {
      background: `url(${process.env.PUBLIC_URL}assets/images/oil-gas-refinery-plant-petrochemical-industry-sky-sunset-factory-with-evening-manufacturing-petrochemical-industrial.jpg) rgba(20, 20, 20, 0.3)`,
      backgroundSize: "100%",
      backgroundPosition: "center",
      width: "100%",
      "background-blend-mode": "multiply",
    },
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {/*------------------------------------ Header start ----------------------------------------*/}
      <Grid container item xs={12} className="header" justify="center">
        <Grid md={2} xs={0}></Grid>
        <Grid item md={5} xs={8} pt="10px">
          <span>
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

      {/*------------------------------------ Carousel start ----------------------------------------*/}
      <Grid container item xs={12}>
        <Carousel
          className="carouselContainer"
          activeIndicatorIconButtonProps={{
            style: {
              color: "green",
            },
          }}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Grid>
      {/*------------------------------------ Carousel End ----------------------------------------*/}

      {/*------------------------------------ Description start ----------------------------------------*/}
      <Grid
        item
        xs={12}
        md={10}
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <h1 className="welome-header">Welcome to Nilam Industries</h1>
      </Grid>
      <Grid xs={10} sm={8} md={6}>
        <p className="welcome-text">
          Nilam Industries is one of the best organizations you will find in the
          Madhya Pradesh Region for handling drip irrigation system. We are the
          serving as the manufacturer of all the drip irrigation best quality
          equipment.
        </p>
      </Grid>

      <Grid container item xs={10} sm={8} spacing={7}>
        <Grid item xs={10} sm={8} md={4}>
          <div class="circle our-speciality">
            <div class="circle__inner">
              <div class="circle__wrapper">
                <div class="circle__content">Our Speciality</div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            Our R&D centre is always on the move. A team of five Senior
            Engineers and Fourteen seasoned technicians are 24x7 putting its
            efforts to innovate and upgrade the technology to get the maximum
            output with a quality at its best. The market records have proven
            that we are at top position in India, if you talk about the number
            of machines made and supplied by a single production house under one
            roof. In true sense our products are indigenous.
          </p>
        </Grid>
        <Grid item xs={10} sm={8} md={4}>
          <div class="circle our-company">
            <div class="circle__inner">
              <div class="circle__wrapper">
                <div class="circle__content">Our Company</div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            Nilam Industries in committed to provide a high quality after sales
            services to meet the customer satisfaction. A sense of true
            commitment coupled with professional zeal drives our technicians to
            reach an ecstasy in putting their excellence in the machine. Strong
            support and prompt service are the significant goals as Nilam
            Industries.
          </p>
        </Grid>
        <Grid item xs={10} sm={8} md={4}>
          <div class="circle choose-us">
            <div class="circle__inner">
              <div class="circle__wrapper">
                <div class="circle__content">Why Choose Us?</div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            There are countless reasons to choose from our range of machines
            across the country.
          </p>
        </Grid>
      </Grid>
      {/*------------------------------------ Description End ----------------------------------------*/}

      {/*------------------------------------ USP Start ----------------------------------------*/}
      <Grid container item xs={12} className="usp" justify="center">
        <Grid item xs={12} md={3}>
          <h1>WE BUILD DRIP IRRIGATION MACHINE</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <h1>PRODUCTS</h1>
          <h1 className="number">+100</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <h1>CLIENTS</h1>
          <h1 className="number">+100</h1>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Paper style={styles.paperContainer}>
          <Grid
            item
            xs={12}
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <h1 className="usp-header"> USP’s of Nilam Industries</h1>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <ul className="usp-list">
              <li>Increase in yield at a high rate of more than 70%</li>
              <li>
                Saves water at a very fast pace and more land can be irrigated.
              </li>
              <li>High return on investments</li>
              <li>Proven Technology</li>
              <li>Suitable designs and cost effective plans</li>
            </ul>
          </Grid>
        </Paper>
      </Grid>
      {/*------------------------------------ USP End ----------------------------------------*/}
      {/*------------------------------------ Client Start ----------------------------------------*/}
      <Grid
        container
        item
        xs={12}
        className="client"
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <h1 className="client-header"> OUR CLIENTS </h1>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <ClientCarousel />
        </Grid>
      </Grid>
      {/*------------------------------------ Client End ----------------------------------------*/}
    </Grid>
  );
}

function Item(props) {
  const gothamBoldFont = {
    fontFamily: "gotham",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400,
    src: `
      local('gotham'),
      url(${process.env.PUBLIC_URL}${gothamBold}) format('ttf')
    `,
  };
  console.log(gothamBoldFont);
  const theme = createMuiTheme({
    typography: {
      fontFamily: "gotham",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [gothamBoldFont],
        },
      },
    },
  });
  const styles = {
    paperContainer: {
      backgroundImage: `url(${process.env.PUBLIC_URL}assets/images/${props.item.image})`,
      backgroundSize: "100% 100%",
      overflow: "hidden",
      height: "45vh",
      paddingLeft: "15%",
      paddingTop: "5vh",
      backgroundPosition: "right bottom",
    },
    header: {
      fontFamily: "gotham",
      color: "green",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper style={styles.paperContainer}>
        <h2 style={styles.header}>{props.item.headingFirstLine}</h2>
        <h2 style={styles.header}>{props.item.headingSecondLine}</h2>
        <p>{props.item.description}</p>

        <Button className="check-button">Check it out!</Button>
      </Paper>
    </ThemeProvider>
  );
}

const App = Example;
export default App;
