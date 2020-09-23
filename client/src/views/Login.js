import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/auth'
import Loader from '../components/Loader'

export default function Login() {
  const dispatch = useDispatch()
  const { isAuthenticated, verifying, authenticating, errors } = useSelector(
    (state) => state.auth
  )

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    e.preventDefault()

    dispatch(loginUser({ email, password }))
  }

  if (verifying) {
    return <Loader />
  } else if (isAuthenticated) {
    return <Redirect to="/secret" />
  }

  return (
    <div className="container pt-4">
      <div style={{ maxWidth: '350px' }} className="mx-auto">
        <h1 className="display-4 text-center mb-4">Login</h1>
        <form onSubmit={submitForm}>
          {errors && errors.login ? (
            <div className="alert alert-danger" role="alert">
              {errors.login.message}
            </div>
          ) : null}
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="e.g. abc@test.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Must be at least 6 characters long"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={authenticating}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
