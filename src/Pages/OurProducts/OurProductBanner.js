import { Grid, makeStyles } from "@material-ui/core"
import { Item } from "./Item";


export const OurProductBanner = ({item}) => {
    return (
    <Grid xs={12}>
        <Item item={item}>

        </Item>
    </Grid>
    );
}