import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const filterReducer = createReducer("", {
  [actions.filter]: (state, action) => action.payload.value,
});
