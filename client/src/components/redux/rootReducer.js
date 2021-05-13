import { combineReducers } from "redux";
import { userReducer } from "./auth/userReducer";
import { postReducer } from "./posts/postReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});
export default persistReducer(persistConfig, rootReducer);
