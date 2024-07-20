import React from 'react'
import {Box, Button,Toolbar,Typography,AppBar} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StudentApp
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none',color:'white'}} >Add</Link></Button>
          <Button><Link to={'/T'} style={{textDecoration:'none',color:'white'}} >View</Link></Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
