import { userActionTypes } from "./userActionTypes";

const INITIAL_STATE = {
  userData: null,
  error: null,
  user: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        user: action.payload.user,
        error: null,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: null,
      };
    case userActionTypes.SIGNOUT:
      return {
        ...state,
        userData: null,
        user: null,
      };
    default:
      return state;
  }
};
