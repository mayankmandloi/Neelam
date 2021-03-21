import { Grid, makeStyles } from "@material-ui/core"


const useStyle = makeStyles(() => ({
textJustify: {
    textAlign:"justify"
},
image: {
    width: "100%",
    paddingLeft: "2.5%"
},
about: {
    flexDirection: "column",
    paddingRight: "50px"
},
pullNext: {
    marginBottom: "-2px"
}
}))

export const DescriptionAndImage = ({item:{heading,text, image}}) => {
    const classes = useStyle();
return(
<Grid container xs={12} className={classes.pullNext}>
    <Grid container item xs={12} sm={5}>
        <Grid item container xs={0} md={4}></Grid>
        <Grid item container xs={12} md={8} className={classes.about}>
        <h2>{heading}</h2>
        <p class={classes.textJustify}>{text}</p>
        </Grid>
    </Grid>
    <Grid container item xs={12} sm={6}>
        <Grid xs={0} md={1}></Grid>
        <Grid xs={12} md={11}><img
        class={classes.image}
        src={`${process.env.PUBLIC_URL}assets/images/waterFountain.png`}
        /></Grid>
    </Grid>
</Grid>
)
}