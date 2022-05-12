import React from 'react'
import { Box, AppBar, Typography, Toolbar, Button } from '@mui/material'
import styles from '../../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <AppBar position='sticky'>
      <Toolbar> 
        <Button variant="text" href="/" sx={{color: '#FFFFFF'}}>
          Home
        </Button>
        <Button variant="text" href="/blog" sx={{color: '#FFFFFF'}}>
          Blog
        </Button>
        <Button variant="text" href="/videos" sx={{color: '#FFFFFF'}}>
          Videos
        </Button>
        <Button variant="text" href="/about" sx={{color: '#FFFFFF'}}>
          About
        </Button>
      </Toolbar>
  </AppBar> 
  )
}
