import { AUTHTOKENSAVE } from "../constants/auth";

const auth = (state = {}, action) => {
  switch (action.type) {
    case AUTHTOKENSAVE: {
      return {
        ...state,
        authtoken: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default auth;
