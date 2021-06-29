import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

import Landing from './components/layout/Landing'
import About from './components/layout/About'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/private-route/PrivateRoute'
import Dashboard from './components/dashboard/Dashboard'

// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken
//   setAuthToken(token)
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token)
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded))

//   // Check for expired token
//   const currentTime = Date.now() / 1000 // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logout())

//     // Redirect to login
//     window.location.href = './login'
//   }
// }

const App = () => {
  return (
    <Router>
      <main className='App'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/why' component={About} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        {/* <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch> */}
      </main>
    </Router>
  )
}

export default App
