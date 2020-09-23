import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../actions/auth'

export default function Navbar() {
  const dispatch = useDispatch()
  const {
    authenticating,
    isAuthenticated,
    verifying,
    loggingOut,
  } = useSelector((state) => state.auth)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Frontend with JWT
        </a>

        {authenticating || verifying ? null : (
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <a href="/secret" className="nav-link">
                    Secret
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light"
                    disabled={loggingOut}
                    onClick={() => dispatch(logoutUser())}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a href="/login" className="nav-link">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/register" className="nav-link">
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}
