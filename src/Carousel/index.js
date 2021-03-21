import { Item } from "./Item";

const { Grid, makeStyles } = require("@material-ui/core");
const { default: Carousel } = require("react-material-ui-carousel");


const useStyles = makeStyles((theme) => ({
    carouselContainer: {
        height: "55vh",
        width: "100%"
      }
}))
export const CarouselTop = ({items}) => {
    const classes = useStyles();
    return (<Grid container item xs={12}>
        <Carousel
          className={classes.carouselContainer}
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
      </Grid>);
}