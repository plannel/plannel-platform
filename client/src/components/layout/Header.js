import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { ReactComponent as Logo } from './plannel-logo-svg.svg'

const Header = () => {
  return (
    <AppBar position='static' color='transparent' className='header'>
      <Container maxWidth='lg'>
        <Grid container alignItems='center'>
          <Grid item lg={6}>
            <Link to='/' className='logo'>
              <Logo /> Plannel
            </Link>
          </Grid>
          <Grid item lg={6} align='right' className='menu-right'>
            <Link to='/why' className='about'>
              Why Plannel?
            </Link>
            <Link to='/login' className='login'>
              Login
            </Link>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}

export default Header
