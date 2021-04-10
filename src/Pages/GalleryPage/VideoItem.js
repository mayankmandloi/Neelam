import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextWithLine } from "./TextWithLine";

const useStyles = makeStyles({
  image: {
      border: "1px solid grey",
      padding: "5px",
      width: "88%",
      height: "250px"
  },
  title: {
      textAlign: "center"
  },
  bottomMargin: {
      marginBottom: "40px"
  }
});

export const VideoCard = ({ item }) => {
  const classes = useStyles();

  return (  
  <iframe class={classes.image} src="https://www.youtube.com/embed/LXb3EKWsInQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen" allowfullscreen></iframe>
  );
};

export const VideoItems = ({ photos }) => {
    const classes = useStyles();
    const productCardWrapper = () => {
        return photos.map((item) => {
            return (<Grid item xs={12} sm={6} md={4}>
                <VideoCard item={item} />
              </Grid>)
        });
    }
  return (
    <Grid container item xs={12}>
      <Grid xs={2}></Grid>
      <Grid container item xs={8} className={classes.bottomMargin}>
      <TextWithLine text='Video Gallery'/>
        {productCardWrapper()}
      </Grid>
    </Grid>
  );
};
