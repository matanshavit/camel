import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";

import CoffeeDrinksPage from "./pages/CoffeeDrinksPage";
import CoffeeDrinksContextProvider from "./contexts/CoffeeDrinksContext/Provider";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[200],
    },
    secondary: {
      main: pink[200],
    },
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <CoffeeDrinksContextProvider>
      <CoffeeDrinksPage />
    </CoffeeDrinksContextProvider>
  </ThemeProvider>
);

export default App;
