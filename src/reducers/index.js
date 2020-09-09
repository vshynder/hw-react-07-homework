import { combineReducers } from "redux";

import { contactReducer, loading } from "./contactReducer";
import { filterReducer } from "./filterReducer";
import { mountedReducer } from "./mountedReducer";
import { alertShownReducer } from "./alertShownReducer";
import { alertMessageReducer } from "./alertMessageReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  isMounted: mountedReducer,
  isAlertShown: alertShownReducer,
  alertMessage: alertMessageReducer,
  isLoading: loading,
});

export default rootReducer;
