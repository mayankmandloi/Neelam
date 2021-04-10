import gothamBold from "../../assets/fonts/GothamBold.ttf";
import { createMuiTheme, ThemeProvider, Paper, Button } from "@material-ui/core";
export function TopBanner(props) {
    const gothamBoldFont = {
      fontFamily: "gotham",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      src: `
        local('gotham'),
        url(${process.env.PUBLIC_URL}${gothamBold}) format('ttf')
      `,
    };
    const theme = createMuiTheme({
      typography: {
        fontFamily: "gotham",
      },
      overrides: {
        MuiCssBaseline: {
          "@global": {
            "@font-face": [gothamBoldFont],
          },
        },
      },
    });
    const styles = {
      paperContainer: {
        backgroundImage: `url(${process.env.PUBLIC_URL}assets/images/${props.item.image})`,
        backgroundSize: "100% 100%",
        overflow: "hidden",
        height: "450px",
        paddingLeft: "15%",
        paddingTop: "5vh",
        backgroundPosition: "right bottom",
      },
      header: {
        fontFamily: "gotham",
        color: "#032E5A",
        paddingTop: "80px"
      },
    };
    return (
      <ThemeProvider theme={theme}>
        <Paper style={styles.paperContainer}>
          <h1 style={styles.header}>{props.item.headingFirstLine}</h1>
          <p>{props.item.description}</p>
        </Paper>
      </ThemeProvider>
    );
  }