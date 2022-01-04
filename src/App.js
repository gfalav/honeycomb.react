import './App.css';
import Topbar from './comps/Topbar';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system';
import Theme from './Theme';
function App() {

  const theme = createTheme(Theme())

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Topbar />
        Honeycomb app
      </div>
    </ThemeProvider>
  );
}

export default App;
