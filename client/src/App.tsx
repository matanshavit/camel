import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CoffeeDrinksPage from "./pages/CoffeeDrinksPage";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <CoffeeDrinksPage />
  </ThemeProvider>
);

export default App;
