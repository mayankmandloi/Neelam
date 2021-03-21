import { Grid, makeStyles } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  makeCenter: {
    justify: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign:"center"
  },
  welomeHeader: {
    textAlign: "center",
    "&:after": {
      content: "''",
      display: "inline-block",
      width: "15%",
      height: "1px",
      marginBottom: "8px",
      marginLeft: "2%",
      backgroundColor: "#000000",
    },
    '&:before': {
        content: "''",
        display: "inline-block",
        width: "15%",
        height: "1px",
        marginBottom: "8px",
        marginRight: "2%",
        backgroundColor: "#000000"
    }
  },

    circle: {
    position: "relative",
    display: "block",
    margin: "2em 0",
    backgroundColor: "transparent",
    color:" #222",
    textAlign: "center",
    '&:after': {
        display: "block",
        paddingBottom: "100%",
        width: "100%",
        height: 0,
        borderRadius: "50%",
        backgroundColor: "#ddd",
        content: "''"
      }
  },
  ourSpeciality:{
    color: "#ffffff",
    "&:after": {
        backgroundColor: "#243f64"
      }
  },
  ourCompany:{
    color: "#ffffff",
    "&:after": {
        backgroundColor: "#5eba52"
      }
  },
  chooseUs:{
    color: "#ffffff",
    '&:after': {
        backgroundColor: "#b0894e"
      }
  },
  circleInner: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  
  circleWrapper: {
    display: "table",
    width: "100%",
    height: "100%"
  },
  
  circleContent: {
    display: "table-cell",
    padding: "1em",
    verticalAlign: "middle",
    fontSize:"2em"
  }
  
}));

export const Description = () => {
    const classes = useStyles();

    const matchesMin480 = useMediaQuery('(min-width:480px)');
    const matchesMin768 = useMediaQuery('(min-width:768px)');

    
    return (
    <>
    <Grid
        item
        xs={12}
        md={10}
        className={classes.makeCenter}
      >
        <h1 class={classes.welomeHeader}>Welcome to Nilam Industries</h1>
      </Grid>
      <Grid xs={10} sm={8} md={6}>
        <p class={classes.welcomeText}>
          Nilam Industries is one of the best organizations you will find in the
          Madhya Pradesh Region for handling drip irrigation system. We are the
          serving as the manufacturer of all the drip irrigation best quality
          equipment.
        </p>
      </Grid>

      <Grid container item xs={10} sm={8} spacing={7}>
        <Grid item xs={10} sm={8} md={4}>
          <div class={`${classes.circle} ${classes.ourSpeciality}`}>
            <div class={classes.circleInner}>
              <div class={classes.circleWrapper}>
                <div class={classes.circleContent}>Our Speciality</div>
              </div>
            </div>
          </div>
          <p class={classes.makeCenter}>
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
        <div class={`${classes.circle} ${classes.ourCompany}`}>
            <div class={classes.circleInner}>
              <div class={classes.circleWrapper}>
                <div class={classes.circleContent}>Our Company</div>
              </div>
            </div>
          </div>
          <p class={classes.makeCenter}>
            Nilam Industries in committed to provide a high quality after sales
            services to meet the customer satisfaction. A sense of true
            commitment coupled with professional zeal drives our technicians to
            reach an ecstasy in putting their excellence in the machine. Strong
            support and prompt service are the significant goals as Nilam
            Industries.
          </p>
        </Grid>
        <Grid item xs={10} sm={8} md={4}>
        <div class={`${classes.circle} ${classes.chooseUs}`}>
            <div class={classes.circleInner}>
              <div class={classes.circleWrapper}>
                <div class={classes.circleContent}>Why Choose Us?</div>
              </div>
            </div>
          </div>
          <p class={classes.makeCenter}>
            There are countless reasons to choose from our range of machines
            across the country.
          </p>
        </Grid>
      </Grid>
      </>
      );
}