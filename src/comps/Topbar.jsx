import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import app from './firebase/fb'
import { Link, useNavigate } from 'react-router-dom'


export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [user, setUser] = React.useState(null)

  const fb = app
  const auth = getAuth(fb)
  let navigate = useNavigate()

  React.useEffect( ()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  })

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (action,e) => {
    setAnchorEl(null)
  }

  const SignOutClick = () => {
    setAnchorEl(null)
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
        console.log(error)
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link} to='/'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Honeycomb
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                { !user ? 
                  <div>
                    <MenuItem component={Link} to='/SignIn' onClick={(e)=> handleClose('in',e)}>SignIn</MenuItem>
                    <MenuItem component={Link} to='/SignUp' onClick={(e)=> handleClose('up',e)}>SignUp</MenuItem>
                  </div>
                  :
                  <div>
                    <MenuItem component={Link} to='/SignIn' onClick={ SignOutClick }>SignOut</MenuItem>
                  </div>
                  }
              </Menu>
              {user && user.email}
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
