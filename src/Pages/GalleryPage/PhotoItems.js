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

export const PhotoImageCard = ({ item }) => {
  const classes = useStyles();

  return (  
      <>
      <img class={classes.image} src={item.image || "https://picsum.photos/250/250"}/>
      </>
  );
};

export const PhotoItems = ({ photos }) => {
    const classes = useStyles();
    const productCardWrapper = () => {
        return photos.map((item) => {
            return (<Grid item xs={12} sm={6} md={4}>
                <PhotoImageCard item={item} />
              </Grid>)
        });
    }
  return (
    <Grid container item xs={12}>
      <Grid xs={2}></Grid>
      <Grid container item xs={8} className={classes.bottomMargin}>
      <TextWithLine text='Photo Gallery'/>
        {productCardWrapper()}
      </Grid>
    </Grid>
  );
};
