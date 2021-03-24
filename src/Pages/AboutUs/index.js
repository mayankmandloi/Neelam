    import { AboutUsBanner } from "./AboutUsBanner";
    import { DescriptionAndImage } from "./DescriptionAndImage";
    import { Grid, makeStyles } from "@material-ui/core";
    import { Teams } from "./TeamCard";

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
    aboutHeader: {
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
    aboutText: {
        textAlign:'center'
    }
    }));

    export const AboutUs = () => {
    const data = {
        banner: {
        headingFirstLine: "About Us",
        headingSecondLine: "HOME/About US",
        image: "future-factory-plant-energy-industry-concept2.jpg",
        },
        about: {
        heading: "About Nilam Industries",
        text:
            "Nilam Industries is one of the best organizations you will find in the Madhya Pradesh Region for handling drip irrigation system. We are the serving as the manufacturer of all the drip irrigation best quality equipment. As Water resources are diminishing at a very fast pace in the today's world and so Nilam Industries is the name you can rely on. We are the converter of smaller ideas into bigger revolutions. Our systems are designed after the detailed study of interrelationship between soil, water, crop land and agro-climatic conditions. We are serving a lifetime commitment to provide modern and affordable technologies of drip irrigation.",
        image: "",
        },
        vision: {
        heading: "Our Vision",
        text:
            "To achieve sustainable development and prevent scarcity of food, water and land and environment by adopting advanced technologies and to fulfil ever rising demands of the irrigation systems.",
        },
        mission: {
        heading: "Our Mision",
        text:
            "Delivering quality products with proven technologies and understanding customer’s requirements to offer the best of our services. We are the givers of the good value of your money.",
        },
        team: {
        heading: "OUR TEAM",
        text:
            "Nilam Industries is one of the best organizations you will find in the Madhya Pradesh Region for handling drip irrigation system. We are the serving as the manufacturer of all the drip irrigation best quality equipment.",
        teamMember: [
            {
            image: "https://picsum.photos/175/90",
            name: "",
            about: "",
            },
            {
            image: "https://picsum.photos/175/91",
            name: "",
            about: "",
            },
            {
            image: "https://picsum.photos/175/89",
            name: "",
            about: "",
            },
            {
            image: "https://picsum.photos/174/90",
            name: "",
            about: "",
            },
            {
            image: "https://picsum.photos/176/90",
            name: "",
            about: "",
            },
            {
            image: "https://picsum.photos/174/89",
            name: "",
            about: "",
            },
            {
            image: "https://picsum.photos/174/91",
            name: "",
            about: "",
            },
            {
            image: "https://picsum.photos/176/89",
            name: "",
            about: "",
            },
        ],
        },
    };
    const classes = useStyle();
    return (
      <>
        <AboutUsBanner item={data.banner} />
        <DescriptionAndImage item={data.about} />
        <Grid container item xs={12} className={classes.wrapper}>
          <Grid
            container
            item
            xs={12}
            md={6}
            className={classes.greenBackground}
          >
            <Grid item xs={0} md={4}></Grid>
            <Grid item xs={12} md={8}>
              <h2>{data.vision.heading}</h2>
              <p>{data.vision.text}</p>
            </Grid>
          </Grid>
          <Grid container item xs={12} md={6}>
            <Grid xs={0} md={1}></Grid>
            <Grid item xs={12} md={8}>
              <h2>{data.mission.heading}</h2>
              <p>{data.mission.text}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} className="teamWrapper">
          <Grid container item xs={12} className={classes.makeCenter} alignContent="center">
            <Grid xs={0} md={1}></Grid>
            <Grid item xs={12} md={10}>
              <h1 class={classes.aboutHeader}>Welcome to Nilam Industries</h1>
            </Grid>
            <Grid xs={1} sm={2} md={3}></Grid>
            <Grid xs={10} sm={8} md={6}>
        <p class={classes.aboutText}>
        Nilam Industries is one of the best organizations you will find in the Madhya Pradesh Region for handling drip irrigation system. We are the serving as the manufacturer of all the drip irrigation best quality equipment.
        </p>
      </Grid>
          </Grid>
          <Grid container item xs={12}><Teams/></Grid>
          <Grid container item xs={12}><Teams/></Grid>
        </Grid>
      </>
    );
    };
