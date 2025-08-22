import { createStore, applyMiddleware } from "redux";
import { Allreducers } from "./Allreducers";
import logger from "redux-logger";
export const TheStor = createStore(Allreducers, applyMiddleware(logger));
