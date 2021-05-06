import LinearStepper from "./LinearStepper";
import { CssBaseline} from "@material-ui/core";
import { theme } from "./theme";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import {ThemeProvider} from "@material-ui/core";
//Localization
import { useTranslation } from 'react-i18next';

function App() {
  //Localization
  const { t } = useTranslation();

  return (
    <>
      <ThemeProvider theme={theme}>
      <PrimarySearchAppBar/>
      </ThemeProvider>
      <CssBaseline />
      <LinearStepper />
    </>
  );
}

export default App;
