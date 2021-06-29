import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Header from '../layout/Header'
import GoogleLogin from 'react-google-login'
import { login } from '../../actions/authActions'

const useStyles = makeStyles((theme) => ({
  GoogleButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Login = ({ location, history }) => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/dashboard'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(login(email, password))
  }

  const googleSuccess = (res) => {
    // const result = res?.profileObj
    // const token = res?.tokenId
    // try {
    //   console.log(result)
    //   // dispatch({ type: 'USER_LOGIN_REQUEST', data: { result, token } })
    //   // history.push('/Dashboard')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const googleFailure = () => {
    console.log('Google Sign in Failed')
  }

  return (
    <div>
      <Header />
      <div>
        <Container maxWidth='xs'>
          <Grid container>
            <Grid item lg={12} align='center'>
              <Typography component='h1' variant='h5'>
                Log in
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <form onSubmit={handleSubmit}>
                <GoogleLogin
                  clientId='618330822998-22j6snd5gkjl5v10lke966d3c9epq6td.apps.googleusercontent.com'
                  // render={(renderProps) => (
                  //   <Button
                  //     className='classes.googleButton'
                  //     color='default'
                  //     fullWidth
                  //     onClick={renderProps.onClick}
                  //     disabled={renderProps.disabled}
                  //   >
                  //     Sign in with Google
                  //   </Button>
                  // )}
                  className={classes.GoogleButton}
                  onSuccess={googleSuccess}
                  onFailue={googleFailure}
                  cookiePolicy='single_host_origin'
                />
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  variant='outlined'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className=''
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    Forgot password?
                    <Link href='#' to='/' variant='body2'>
                      Recover Password
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Login
