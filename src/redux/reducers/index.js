// Modules
import { combineReducers } from "redux";

// Reducers
import population from "./population.reducer";
import prefecture from "./prefecture.reducer";

const rootReducer = combineReducers({
  population,
  prefecture,
});

export default rootReducer;
