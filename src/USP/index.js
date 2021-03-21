import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    paperContainer: {
        background: `url(${process.env.PUBLIC_URL}assets/images/oil-gas-refinery-plant-petrochemical-industry-sky-sunset-factory-with-evening-manufacturing-petrochemical-industrial.jpg) rgba(20, 20, 20, 0.3)`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        width: "100%",
        "background-blend-mode": "multiply",
      },
      usp: {
    backgroundColor: "#243f64",
    paddingBottom: "20px",
    "& h1": {
        paddingTop: "20px",
        textAlign: "center",
        margin: 0,
        color: "#b28751"
      },
},
    uspHeader: {
        color: "#ffffff",
        paddingTop: "10px",
        textAlign: "center",
        "&:after": {
            content: "''",
            display: "inline-block",
            width: "15%",
            height: "1px",
            marginBottom: "8px",
            marginLeft: "2%",
            backgroundColor: "#ffffff"
        },
        "&:before": {
            content: "''",
            display: "inline-block",
            width: "15%",
            height: "1px",
            marginBottom: "8px",
            marginRight: "2%",
            backgroundColor: "#ffffff"
        }
    },
    Number: {
        paddingTop: 0,
        textAlign: "center",
        margin: 0,
        color: "#fff",
        fontSize: "4em"
      },
      uspList: {
        color: "#ffffff",
        paddingBottom: "5vh",
        "& li" :{
            paddingTop: "5px",
            paddingBottom: "5px",
        }
      },
      makeCenter: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }
}));

export const USP = () => {
    const classes= useStyle();
  return (
    <>
      <Grid container item xs={12} className={classes.usp} justify="center">
        <Grid item xs={12} md={3}>
          <h1>WE BUILD DRIP IRRIGATION MACHINE</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <h1>PRODUCTS</h1>
          <h1 class={classes.Number}>+100</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <h1>CLIENTS</h1>
          <h1 class={classes.Number}>+100</h1>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        className={classes.makeCenter}
      >
        <Paper className={classes.paperContainer}>
          <Grid
            item
            xs={12}
            className={classes.makeCenter}
          >
            <h1 class={classes.uspHeader}> USP’s of Nilam Industries</h1>
          </Grid>
          <Grid
            container
            item
            xs={12}
            className={classes.makeCenter}
          >
            <ul class={classes.uspList}>
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
    </>
  );
};
