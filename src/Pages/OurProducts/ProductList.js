import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
      border: "1px solid grey",
      padding: "5px",
      width: "88%"
  },
  title: {
      textAlign: "center"
  },
  bottomMargin: {
      marginBottom: "40px"
  }
});

export const ProductCard = ({ item }) => {
  const classes = useStyles();

  return (  
      <>
      <img class={classes.image} src={item.image || "https://picsum.photos/174/90"}/>
      <h4 class={classes.title}>{item.name}</h4>
      </>
  );
};

export const ProductList = ({ products }) => {
    const classes = useStyles();
    const productCardWrapper = () => {
        return products.map((item) => {
            return (<Grid item xs={6} md={4}>
                <ProductCard item={item} />
              </Grid>)
        });
    }
  return (
    <Grid container item xs={12}>
      <Grid xs={2}></Grid>
      <Grid container item xs={8} className={classes.bottomMargin}>
        {productCardWrapper()}
      </Grid>
    </Grid>
  );
};
