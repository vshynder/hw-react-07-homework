const getIsMounted = (state) => state.isMounted;
const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;
const getAlertShown = (state) => state.isAlertShown;
const getAlertMessage = (state) => state.alertMessage;
const getLoader = (state) => state.isLoading;

export default {
  getIsMounted,
  getContacts,
  getFilter,
  getAlertShown,
  getAlertMessage,
  getLoader,
};
