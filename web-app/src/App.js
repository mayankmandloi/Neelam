import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, ThemeProvider, createMuiTheme } from '@material-ui/core'
import './App.css';
import gothamBold from './assets/fonts/GothamBold.ttf';

function Example(props)
{
    var items = [
        {
          headingFirstLine: "Save Today",
          headingSecondLine:"Rejoice Tomorrow",
          description: "Be more intelligent in Saving Water and Make wiser use of irrigation System",
          image: "drip-irrigation-pipe-making-machine-1510658903-3451778.png"
        },
        {
          headingFirstLine: "Save Today 1",
          headingSecondLine:"Rejoice Tomorrow 1",
          description: "Be more intelligent in Saving Water and Make wiser use of irrigation System",
          image: "industrial-estate-refinery-factory-oil-storage-tank-petrochemical-plant-area-with-beautify-sky-sunset.jpg"
        }
    ];

    return (
        <Carousel className="carouselContainer">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
  console.log(`${process.env.PUBLIC_URL}${gothamBold}`);
  const gothamBoldFont = {
    fontFamily:'gotham',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('gotham'),
      url(${process.env.PUBLIC_URL}${gothamBold}) format('ttf')
    `
  };
  console.log(gothamBoldFont);
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'gotham',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [gothamBoldFont],
        },
      },
    },
  });
  const styles = {
    paperContainer: {
        backgroundImage: `url(${process.env.PUBLIC_URL}assets/images/${props.item.image})`,
        backgroundSize: '100% 100%',
        overflow: 'hidden',
        height: '45vh',
        paddingLeft:"15%",
        paddingTop:"5vh",
        backgroundPosition: "right bottom",
    },
    header: {
      fontFamily: 'gotham',
      color: 'green'
    }
};
    return (
      <ThemeProvider theme={theme}>
        <Paper style={styles.paperContainer}>
            <h2 style={styles.header}>{props.item.headingFirstLine}</h2>
            <h2 style={styles.header}>{props.item.headingSecondLine}</h2>
            <p>{props.item.description}</p>

            <Button className="check-button">
                Check it out!
            </Button>
        </Paper>
        </ThemeProvider>
    )
}

const App = Example;
export default App;