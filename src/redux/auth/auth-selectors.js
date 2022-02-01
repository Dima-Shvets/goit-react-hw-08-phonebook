
export const getName = state => state.auth.user.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
export const getError = state => state.auth.error;