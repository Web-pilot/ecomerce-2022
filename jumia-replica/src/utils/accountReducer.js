export const INITIAL_STATE = {
  loading: false,
  user: null,
  error: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true };

    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload };

    case " LOGIN_FAILURE":
      return { ...state, loading: false, error: false };

    default:
      return state;
  }
};
