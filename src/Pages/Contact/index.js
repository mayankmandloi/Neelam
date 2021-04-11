import {ContactForm} from "./form";
import {TopBannerContact} from './TopBanner';
import {MapImage} from "./mapImage"
import { Grid } from "@material-ui/core";
const styles = {
    blueBackground: {
      background: "#243f64",
      color: "white",
      minHeight: "450px",
      padding: "0px 20px 20px 0px"
    },
  };

export const ContactUs = () => {
    return (
        <>
        <Grid xs ="12">
        <TopBannerContact/>
        </Grid>
        <Grid  container xs="12" md="6" style={styles.blueBackground} alignContent="flex-end" justify="flex-end">
        <Grid container item xs={12} sm={10} md={8}>
          <Grid container item xs={12}>
            <h3 style={{textAlign:"center", marginBottom: 0}}>Contact Us</h3>
          </Grid>
          <Grid container item xs={12} style={{textAlign:"justify", margin: 0, padding: 0}}>
            <p>Plot No. A-1, Near Balaji Toll Kanta, Nagziri, Industrial Area, Dewas Road, Ujjain (M.P.) INDIA - 456010</p>
          </Grid>
          <Grid container item xs={12}>
            <a className="phone" href="tel:+919826062225">+91 98260 62225</a>, <a className="phone" href="tel:+919584862225">95848 62225</a>
          </Grid>
          <Grid container item xs={12}>
            <span>Toll Free No.: <a className="phone" href="tel:1800 8896 521">1800 8896 521</a></span>
          </Grid>
          <Grid container item >
            <a className="phone" href="mailto:nilamindustries@gmail.com">nilamindustries@gmail.com</a>
          </Grid>
          <Grid container item >
            <a className="phone" href="http://www.nilamindustries.com/">http://www.nilamindustries.com/</a>
          </Grid>
        </Grid>
        </Grid>
        <Grid xs="12" md="6">
        <ContactForm/>
        </Grid>
        <Grid xs="12">
            <MapImage/>
        </Grid>
        </>
    )
}