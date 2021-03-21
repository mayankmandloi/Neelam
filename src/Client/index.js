const { Grid, makeStyles } = require("@material-ui/core")
const { ClientCarousel } = require("../clientCarousel")

const useStyle = makeStyles(() => ({
    client: {
        backgroundColor: "#b0894e",
        paddingBottom: "30px"
      },
      clientHeader: {
        color: "#ffffff",
        textAlign: "center",
        paddingTop: "10px",
        "&:before": {
            content: "''",
            display: "inline-block",
            width: "15%",
            height: "1px",
            marginBottom: "8px",
            marginRight: "2%",
            backgroundColor: "#ffffff"
        },
        "&:after": {
            content: "''",
            display: "inline-block",
            width: "15%",
            height: "1px",
            marginBottom: "8px",
            marginLeft: "2%",
            backgroundColor: "#ffffff"
          }
      },
      makeCenter: {
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center"
      }
}));

export const Client = () => {
    const classes = useStyle();
    return (<Grid
        container
        item
        xs={12}
        className={`${classes.client} ${classes.makeCenter}`}
      >
        <Grid
          item
          xs={12}
          className={classes.makeCenter}
        >
          <h1 class={classes.clientHeader}> OUR CLIENTS </h1>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          className={classes.makeCenter}
        >
          <ClientCarousel />
        </Grid>
      </Grid>)
}