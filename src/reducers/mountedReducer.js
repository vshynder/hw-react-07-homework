import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const mountedReducer = createReducer(false, {
  [actions.toggleMounted]: (state, action) => action.payload.value,
});
