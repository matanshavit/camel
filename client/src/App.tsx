import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CoffeeDrinksPage from "./pages/CoffeeDrinksPage";
import CoffeeDrinksContextProvider from "./contexts/CoffeeDrinksContext/Provider";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
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
