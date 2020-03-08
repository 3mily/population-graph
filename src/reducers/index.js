import { combineReducers } from "redux";
import prefecturesRequest from "./prefectures_request.reducers";

const rootReducer = combineReducers({
  state: (state = {}) => state,
  prefecturesRequest
});

export default rootReducer;
