import './App.css';
import Topbar from './comps/Topbar';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system';
import Theme from './Theme';
import SignUp from './comps/auth/SignUp';


function App() {

  const theme = createTheme(Theme())

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Topbar />
        <SignUp />
      </div>
    </ThemeProvider>
  );
}

export default App;
