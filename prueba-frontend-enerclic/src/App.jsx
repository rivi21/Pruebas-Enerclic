import { ThemeProvider } from "@material-ui/core";
import theme from "./themeConfig";
import Wrapper from "./components/Wrapper";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Wrapper />
      </ThemeProvider>
  );
}

export default App;
