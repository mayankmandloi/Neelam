import gothamBold from "../../assets/fonts/GothamBold.ttf";
import { createMuiTheme, ThemeProvider, Paper, Button } from "@material-ui/core";
export function Item(props) {
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
        height: "45vh",
        paddingRight: "25%",
        paddingTop: "5vh",
        backgroundPosition: "right bottom",
      },
      header: {
        fontFamily: "gotham",
        textAlign: "right"
      },
    };
    return (
      <ThemeProvider theme={theme}>
        <Paper style={styles.paperContainer}>
          <h1 style={styles.header}>{props.item.headingFirstLine}</h1>
          <h5 style={styles.header}>{props.item.headingSecondLine}</h5>
          <p>{props.item.description}</p>
        </Paper>
      </ThemeProvider>
    );
  }