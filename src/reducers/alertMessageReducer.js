import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const alertMessageReducer = createReducer("", {
  [actions.toggleAlertMessage]: (state, action) => action.payload.value,
});
