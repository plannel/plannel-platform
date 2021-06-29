import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useHistory } from 'react-router-dom'
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
// import Loader from '../layout/Loader'

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

const Survey = ({ setForm, formData, navigation }) => {
  const classes = useStyles()

  const { fname, role } = formData

  const { previous, next } = navigation

  return (
    <div>
      <Header />
      <div className={classes.survey}>
        <Container component='main' maxWidth='sm'>
          <div className={classes.paper}>
            <div className={classes.top}>
              <Typography variant='h3' className={classes.h3}>
                Hi {fname},
              </Typography>
              <Typography variant='body1' className={classes.body1}>
                We want to make your life easier. Help us make that possible by
                telling us about your role.
              </Typography>
            </div>
            <Grid container>
              <Grid item xs={12}>
                <FormControl component='fieldset'>
                  <RadioGroup name='role' value={role} onChange={setForm}>
                    <FormControlLabel
                      value='I focus on strategy for a single product'
                      control={<Radio color='primary' />}
                      label='I focus on strategy for a single product'
                      style={{ marginBottom: '0.5rem' }}
                    />
                    <FormControlLabel
                      value='I focus on strategy for a multiple products'
                      control={<Radio color='primary' />}
                      label='I focus on strategy for a multiple products'
                      style={{ marginBottom: '0.5rem' }}
                    />
                    <FormControlLabel
                      value='I wear many hats from strategy to do’er'
                      control={<Radio color='primary' />}
                      label='I wear many hats from strategy to do’er'
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
            <Grid container>
              <Grid item xs={6}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='secondary'
                  className={classes.submit}
                  onClick={previous}
                >
                  Previous
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                  onClick={next}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Survey
