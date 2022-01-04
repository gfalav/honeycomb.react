import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import BoltIcon from '@mui/icons-material/Bolt';

const Topbar = () => {


    return(

        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        edges="start"
                        >
                        <BoltIcon />
                    </IconButton>
                    <Typography component="div" variant="h5" sx={{ ml: 1, flexGrow: 1}}>
                        Honeycomb
                    </Typography>
                    <IconButton
                        size="large"
                        color="inherit"
                        edges='start'
                        >
                        <MenuIcon fontSize="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Topbar