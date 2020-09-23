import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { verifying, isAuthenticated } = useSelector((state) => state.auth)

  return (
    <Route
      {...rest}
      render={(props) => {
        if (verifying) {
          return <Loader />
        } else if (!isAuthenticated) {
          return <Redirect to="/login" />
        } else {
          return <Component {...props} />
        }
      }}
    />
  )
}

export default PrivateRoute
