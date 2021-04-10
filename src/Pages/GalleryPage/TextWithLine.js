import { Grid, makeStyles } from "@material-ui/core"

const useStyle = makeStyles(() => ({

    productHeader: {
      margin: "30px 0px 20px 0px",
      "&:after": {
        content: "''",
        display: "inline-block",
        width: "70%",
        height: "1px",
        marginBottom: "8px",
        marginLeft: "2%",
        backgroundColor: "#000000",
      },
    },
  }));

export const TextWithLine = ({text}) => {

    const classes =  useStyle();
    return (
        <Grid container item xs={12}>
        <Grid
          container
          item
          xs={12}
        >
          <Grid item xs={12}>
            <h1 class={classes.productHeader}>{text}</h1>
          </Grid>
        </Grid>
      </Grid>
    )
}