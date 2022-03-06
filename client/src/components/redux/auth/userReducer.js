import { userActionTypes } from "./userActionTypes";

const INITIAL_STATE = {
  userData: null,
  error: null,
  user: null,
  userProfile: null,
  isLoading: false,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_START:
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        user: action.payload.user,
        error: null,
        isLoading: false,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case userActionTypes.SIGNOUT:
      return {
        ...state,
        userData: null,
        user: null,
      };

    case userActionTypes.GET_USER_PROFILE_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.GET_USER_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userProfile: action.payload,
      };

    case userActionTypes.GET_USER_PROFILE_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
