import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import { registerEmail } from '../../actions/authActions'
import ConfirmDialog from './ConfirmDialog'

import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      height: 56,
    },
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
)

const Landing = ({ history }) => {
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    window.location.reload()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '') {
      console.log('Email Empty')
    } else {
      console.log(email)
      dispatch(registerEmail(email))

      handleClickOpen()
    }
  }

  return (
    <div>
      <Header />
      <div className='waitList'>
        <Box
          className='box'
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Container maxWidth='lg' align='center' className='top'>
            <Typography variant='h1'>Big Title</Typography>
            <Typography variant='h3'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt
            </Typography>
            <AccountCircleIcon
              color='primary'
              fontSize='large'
            ></AccountCircleIcon>
            <div className='formContainer'>
              <form onSubmit={handleSubmit}>
                <Grid container component='div'>
                  <Grid item lg={8}>
                    <TextField
                      variant='outlined'
                      required
                      id='email'
                      fullWidth
                      label='Enter your Email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={4}>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      fullWidth
                      className={classes.input}
                    >
                      Join Waitlist
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
          <Container maxWidth='lg' className='bottom'>
            <Grid component='div' container justify='space-between'>
              <Grid item lg={5} component='div'>
                <Card className='card' component='div'>
                  <CardHeader
                    action={
                      <IconButton aria-label='settings'>
                        <AddIcon />
                      </IconButton>
                    }
                    title='LOREM IPSUM'
                  />
                  <CardContent className='cardContent'>
                    <Typography variant='body2' component='p'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={5} component='div'>
                <Card className='card' component='div'>
                  <CardHeader
                    action={
                      <IconButton aria-label='settings'>
                        <AddIcon />
                      </IconButton>
                    }
                    title='LOREM IPSUM'
                  />
                  <CardContent className='cardContent'>
                    <Typography variant='body2' component='p'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <>
          <ConfirmDialog handleClose={handleClose} open={open} />
        </>
      </div>
    </div>
  )
}

export default Landing
