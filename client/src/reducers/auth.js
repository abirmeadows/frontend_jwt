import {
  AUTHENTICATED,
  VERIFYING,
  LOGGING_OUT,
  AUTHENTICATING,
  SET_ERRORS,
  LOGOUT,
} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  authenticating: false,
  verifying: true,
  loggingOut: false,
  errors: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case VERIFYING:
      return {
        ...state,
        verifying: true,
        errors: null,
      }
    case AUTHENTICATING:
      return {
        ...state,
        authenticating: true,
        errors: null,
      }
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
        authenticating: false,
        verifying: false,
      }
    case LOGGING_OUT:
      return {
        ...state,
        loggingOut: true,
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loggingOut: false,
      }
    case SET_ERRORS:
      return {
        authenticating: false,
        verifying: false,
        loggingOut: false,
        errors: action.payload,
      }
    default:
      return state
  }
}
