import { AUTHTOKENSAVE } from "../constants/auth";

export const authtoken_save = (params) => {
  return (dispatch) => {
    dispatch({
      type: AUTHTOKENSAVE,
      payload: params,
    });
  };
};
