import { getUserProfileDataApi, signIn, signUp } from "../../api/auth";

const { userActionTypes } = require("./userActionTypes");

export const signUpStart = () => ({
  type: userActionTypes.SIGN_UP_START,
});

export const signUpSuccess = (userData) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: userData,
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
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
  type: userActionTypes.SIGN_IN_FAILURE,
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

export const signUpStartAsync = (user, history, toast) => {
  return async (dispatch) => {
    dispatch(signUpStart());
    try {
      const userData = await signUp(user, toast);
      dispatch(signUpSuccess(userData));
      history.push("/");
    } catch (error) {
      dispatch(signUpFailure(error));
    }
  };
};

export const signInStartAsync = (user, history, toast) => {
  return async (dispatch) => {
    dispatch(signInStart());
    try {
      const userData = await signIn(user, toast);
      dispatch(signInSuccess(userData));

      history.push("/");
      toast({
        title: "Welcome!",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
};

export const getUserProfileDataStartAsync = () => {
  return async (dispatch) => {
    dispatch(getUserProfileDataStart());
    try {
      const userProfile = await getUserProfileDataApi();
      dispatch(getUserProfileDataSuccess(userProfile));
    } catch (error) {
      dispatch(getUserProfileDataFailure(error));
    }
  };
};
