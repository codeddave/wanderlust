import { postActionTypes } from "./postActionTypes";

const INITIAL_STATE = {
  posts: [],
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case postActionTypes.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
