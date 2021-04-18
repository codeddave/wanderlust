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
    case postActionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case postActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
