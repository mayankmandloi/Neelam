import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import './App.css';
import gothomBold from './assets/fonts/GothamBold.ttf';

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
          headingFirstLine: "Random Name",
          headingSecondLine: "#2",
          description: "Hello World!",
          image: ""
        }
    ];

    console.log(gothomBold);
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
      fontFamily: gothomBold
    }
};
    return (
        <Paper style={styles.paperContainer}>
            <h2 style={styles.header}>{props.item.headingFirstLine}</h2>
            <h2 style={styles.header}>{props.item.headingSecondLine}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

const App = Example;
export default App;