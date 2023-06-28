import { ThemeProvider } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { muiTheme } from '../themes/muiTheme'
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={muiTheme}>
          <Component {...pageProps} />
        </StyledThemeProvider>
      </MuiThemeProvider>
      {/* <Component {...pageProps} /> */}
    </ThemeProvider>
  );
}

export default MyApp;
