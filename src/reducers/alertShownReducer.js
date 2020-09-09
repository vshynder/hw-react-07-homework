import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const alertShownReducer = createReducer(false, {
  [actions.toggleAlertVisibility]: (state, action) => action.payload.value,
});
