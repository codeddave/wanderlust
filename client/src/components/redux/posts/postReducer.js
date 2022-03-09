import { postActionTypes } from "./postActionTypes";

const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case postActionTypes.CREATE_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case postActionTypes.CREATE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case postActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isLoading: false,
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
    case postActionTypes.LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};
