"use client"

import React from 'react'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from '../../StyledButton/StyledButton';
import { AnimatedBackground } from '../../Animated/AnimatedBackground';
const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: '80%',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

  return (
    <StyledHero>
        <Container maxWidth='lg'>
        <Grid container spacing={2}>
            
            <Grid item xs={12} md={4}>
                <Box position='relative' >
                    <Box position='absolute' width={"150%"} top={-100} right={0} >
                        <AnimatedBackground />
                    </Box>
                    <Box position='relative' >
                        <StyledImg src='eu.jpg'/>
                    </Box>
                </Box>
                
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography color='primary.contrastText' variant='h1' textAlign='center' pb={2}>Felipe Correia</Typography>
                <Typography color='primary.contrastText' variant='h2' textAlign='center'>I'm a Software Engineer</Typography>
                
                <Grid container display='flex' justifyContent='center' spacing={3} pt={3}>
                    <Grid item xs={12} md={5} display='flex' justifyContent='center'>
                        <StyledButton>
                            <DownloadIcon/>
                            <Typography>Download CV</Typography>
                        </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={7} display='flex' justifyContent='center'>
                        <StyledButton>
                        <MailOutlineIcon />
                        <Typography>Contact Me</Typography>
                        </StyledButton>
                    </Grid>
                </Grid>
                
                    
                    
            </Grid>
        
        </Grid>
        </Container>
    </StyledHero>
  )
}

export default Hero