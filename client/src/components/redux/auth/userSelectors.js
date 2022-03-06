import { createSelector } from "reselect";

const getUser = (state) => {
  return state.user;
};

export const selectIsLoading = createSelector(
  getUser,
  (user) => user.isLoading
);
