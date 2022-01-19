import './App.css';
import Topbar from './comps/layout/Topbar';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system';
import Theme from './Theme';
import { Outlet } from 'react-router-dom';

function App() {

  const theme = createTheme(Theme())

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Topbar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
