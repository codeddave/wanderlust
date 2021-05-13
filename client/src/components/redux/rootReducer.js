import { combineReducers } from "redux";
import { userReducer } from "./auth/userReducer";
import { postReducer } from "./posts/postReducer";

export const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});
