import { combineReducers } from "redux";
import { OpenAndCloseFunction } from "./reducerFunctions";

export const Allreducers = combineReducers({
  Toogel: OpenAndCloseFunction,
});
