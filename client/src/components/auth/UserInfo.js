import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Header from '../layout/Header'

const useStyles = makeStyles((theme) => ({
  register: {
    height: '85vh',
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const UserInfo = ({ setForm, formData, navigation }) => {
  const classes = useStyles()
  const { fname, lname, email, password } = formData

  const { next } = navigation

  return (
    <div>
      <Header />
      <div className={classes.register}>
        <Container component='main' maxWidth='xs'>
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='first name'
                  name='fname'
                  variant='outlined'
                  required
                  fullWidth
                  id='fname'
                  label='First Name'
                  value={fname}
                  onChange={setForm}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete='last name'
                  name='lname'
                  variant='outlined'
                  required
                  fullWidth
                  id='lname'
                  label='Last Name'
                  value={lname}
                  onChange={setForm}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={setForm}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  value={password}
                  onChange={setForm}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={next}
            >
              Yup, that’s me
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link href='#' to='/login' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default UserInfo
