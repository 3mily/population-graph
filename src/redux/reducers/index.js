// Modules
import { combineReducers } from "redux";

// Reducers
import prefecture from "./prefecture.reducer";

const rootReducer = combineReducers({
  prefecture,
});

export default rootReducer;
