import { signIn, signUp } from "../../api/auth";

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
export const signOut = () => ({
  type: userActionTypes.SIGNOUT,
});

export const getUserProfileDataStart = () => ({
  type: userActionTypes.GET_USER_PROFILE_DATA_START,
});

export const getUserProfileDataSuccess = (userProfileData) => ({
  type: userActionTypes.GET_USER_PROFILE_DATA_SUCCESS,
  payload: userProfileData,
});
export const getUserProfileDataFailure = (error) => ({
  type: userActionTypes.GET_USER_PROFILE_DATA_FAILURE,
  payload: error,
});

export const signUpStartAsync = (user, history) => {
  return async (dispatch) => {
    dispatch(signUpStart());
    try {
      const userData = await signUp(user);
      dispatch(signUpSuccess(userData));
      history.push("/");
    } catch (error) {
      dispatch(signUpFailure());
    }
  };
};

export const signInStartAsync = (user, history) => {
  return async (dispatch) => {
    dispatch(signInStart());
    try {
      const userData = await signIn(user);
      dispatch(signInSuccess(userData));
      history.push("/");
    } catch (error) {
      dispatch(signInFailure());
    }
  };
};
