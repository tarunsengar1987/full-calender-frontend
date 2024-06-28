import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import eventSlice from "./slice/eventSlice";

export const persistConfig = {
  key: "full-calander-demo",
  version: 1,
  storage,
};
const combinedReducer = combineReducers({
  events: eventSlice,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
