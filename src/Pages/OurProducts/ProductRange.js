import { Grid, makeStyles } from "@material-ui/core"

const useStyle = makeStyles(() => ({
    greenBackground: {
      backgroundColor: "green",
      paddingRight: "3%",
      color: "white",
    },
    wrapper: {
      paddingBottom: "20px",
      textAlign: "justify",
    },
    makeCenter: {
      justify: "center",
      alignContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    productHeader: {
      textAlign: "center",
      marginBottom: 0,
      "&:after": {
        content: "''",
        display: "inline-block",
        width: "15%",
        height: "1px",
        marginBottom: "8px",
        marginLeft: "2%",
        backgroundColor: "#000000",
      },
      "&:before": {
        content: "''",
        display: "inline-block",
        width: "15%",
        height: "1px",
        marginBottom: "8px",
        marginRight: "2%",
        backgroundColor: "#000000",
      },
    },
    productText: {
      textAlign: "center",
      paddingBottom: "25px",
    },
  }));

export const ProductRange = () => {

    const classes =  useStyle();
    return (
        <Grid container item xs={12} className="teamWrapper">
        <Grid
          container
          item
          xs={12}
          className={classes.makeCenter}
          alignContent="center"
        >
          <Grid xs={0} md={1}></Grid>
          <Grid item xs={12} md={10}>
            <h1 class={classes.productHeader}>OUR PRODUCTS RANGE</h1>
          </Grid>
          <Grid xs={1} sm={2} md={3}></Grid>
          <Grid xs={10} sm={8} md={6}>
            <p class={classes.productText}>
            Our excellent quality product line of machines is uniform and accurate for water discharge and it is resistant to any chemical. All our products are produced with a high quality virgin material and it has no environmental effect. We have unique designs and high durability of products.
            </p>
          </Grid>
        </Grid>
      </Grid>
    )
}