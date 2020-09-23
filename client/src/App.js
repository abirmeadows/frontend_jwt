import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PrivateRoute from './helpers/PrivateRoute'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Secret from './views/Secret'
import { verifyUser } from './actions/auth'
import createAxiosResponseInterceptor from './helpers/axios_interceptors'
import store from './store'

function App() {
  createAxiosResponseInterceptor()

  useEffect(() => {
    store.dispatch(verifyUser())
  }, [])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <PrivateRoute path="/secret" component={Secret} exact />
      </Switch>
    </Router>
  )
}

export default App
