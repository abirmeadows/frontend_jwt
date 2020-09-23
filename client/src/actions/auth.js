import axios from 'axios'
import {
  AUTHENTICATED,
  AUTHENTICATING,
  LOGGING_OUT,
  VERIFYING,
  SET_ERRORS,
  LOGOUT,
} from '../actions/types'

export const registerUser = (args) => async (dispatch) => {
  try {
    dispatch({
      type: AUTHENTICATING,
    })

    await axios.post('/auth/register', args)

    dispatch({
      type: AUTHENTICATED,
    })
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: {
        register: err.response.data.error,
      },
    })
  }
}

export const loginUser = (args) => async (dispatch) => {
  try {
    dispatch({
      type: AUTHENTICATING,
    })

    await axios.post('/auth/login', args)

    dispatch({
      type: AUTHENTICATED,
    })
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: {
        login: err.response.data.error,
      },
    })
  }
}
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOGGING_OUT })

    await axios.delete('/auth/logout')

    dispatch({
      type: LOGOUT,
    })
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: {
        logout: err.response.data.error,
      },
    })
  }
}
export const verifyUser = () => async (dispatch) => {
  try {
    dispatch({ type: VERIFYING })

    await axios.post('/auth/verifyuser')

    dispatch({
      type: AUTHENTICATED,
    })
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: {
        verifyuser: {
          message: 'Unauthorized',
        },
      },
    })
  }
}
