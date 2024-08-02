"use client"

import { AppBar, MenuItem, styled, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {

    const StyledToobar = styled(Toolbar)(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-evenly',

    }))

  return (
    <div>
        <AppBar position="absolute">
            <StyledToobar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </StyledToobar>
        </AppBar>
    </div>
  )
}

export default Navbar