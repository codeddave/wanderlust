import { signUp } from "../../api/auth";

const { userActionTypes } = require("./userActionTypes");

export const signUpStart = () => ({
  type: userActionTypes.SIGN_UP_START,
});

export const signUpSuccess = (userData) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: userData,
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: error,
});

export const signInStart = () => ({
  type: userActionTypes.SIGN_IN_START,
});

export const signInSuccess = (userData) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: userData,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: error,
});

export const signUpStartAsync = (user) => {
  return async (dispatch) => {
    dispatch(signUpStart());
    try {
      const userData = await signUp(user);
      dispatch(signUpSuccess(userData));
    } catch (error) {
      dispatch(signUpFailure());
    }
  };
};
