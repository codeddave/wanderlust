import { combineReducers } from "redux";
import { postReducer } from "./posts/postReducer";

export const rootReducer = combineReducers({
  post: postReducer,
});
