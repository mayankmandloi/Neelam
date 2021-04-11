import gothamBold from "../../assets/fonts/GothamBold.ttf";
import { createMuiTheme, ThemeProvider, Paper } from "@material-ui/core";
export function TopBannerContact() {
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
        backgroundImage: `url(${process.env.PUBLIC_URL}assets/images/contact-us.jpg)`,
        backgroundSize: "100% 100%",
        overflow: "hidden",
        height: "450px",
        paddingLeft: "15%",
        paddingTop: "5vh",
        backgroundPosition: "right bottom",
      },
    };
    return (
      <ThemeProvider theme={theme}>
        <Paper style={styles.paperContainer}>
        </Paper>
      </ThemeProvider>
    );
  }