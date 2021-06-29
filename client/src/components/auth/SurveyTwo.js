import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Header from '../layout/Header'
import { register } from '../../actions/authActions'
import Loader from '../layout/Loader'

const useStyles = makeStyles((theme) => ({
  survey: {
    height: '85vh',
    display: 'flex',
    alignItems: 'center',
    '& .MuiRadio-root': {
      color: '#7FC4FD',
    },
    '& .MuiRadio-colorPrimary.Mui-checked': {
      color: '#2699FB',
    },
    '& .MuiFormControlLabel-label': {
      fontSize: '20px',
      color: '#7F7F7F',
    },
  },
  top: {
    marginBottom: '8rem',
  },
  h3: {
    color: '#7F7F7F',
    textAlign: 'center',
    fontSize: '40px',
  },
  body1: {
    textAlign: 'center',
    color: '#7F7F7F',
    fontSize: '20px',
  },
}))

const SurveyTwo = ({ setForm, formData, navigation }) => {
  const classes = useStyles()

  const { fname, lname, email, password, role, struggles } = formData

  const dispatch = useDispatch()
  const history = useHistory()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push('/dashboard')
    }
  }, [history, userInfo])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(fname, lname, email, password, role, struggles))
  }

  return (
    <div>
      <Header />
      <div className={classes.survey}>
        <Container component='main' maxWidth='sm'>
          <div className={classes.paper}>
            <div className={classes.top}>
              <Typography variant='h3' className={classes.h3}>
                The Struggle is Real
              </Typography>
              <Typography variant='body1' className={classes.body1}>
                We know what it’s like to have 15+ people requesting different
                features. What’s your biggest headache?
              </Typography>
            </div>
            <form className={classes.form} onSubmit={handleSubmit}>
              {loading && <Loader />}
              <Grid container>
                <Grid item xs={12}>
                  <FormControl component='fieldset'>
                    <RadioGroup
                      name='struggles'
                      value={struggles}
                      onChange={setForm}
                    >
                      <FormControlLabel
                        value='Figuring out where to put the next dollar'
                        control={<Radio color='primary' />}
                        label='Figuring out where to put the next dollar'
                        style={{ marginBottom: '0.5rem' }}
                      />
                      <FormControlLabel
                        value='Understanding what’s the most important'
                        control={<Radio color='primary' />}
                        label='Understanding what’s the most important'
                        style={{ marginBottom: '0.5rem' }}
                      />
                      <FormControlLabel
                        value='Communicating priority and expected delivery dates'
                        control={<Radio color='primary' />}
                        label='Communicating priority and expected delivery dates'
                        style={{ marginBottom: '0.5rem' }}
                      />
                      <FormControlLabel
                        value='None of these'
                        control={<Radio color='primary' />}
                        label='None of these'
                        style={{ marginBottom: '1.5rem' }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SurveyTwo
