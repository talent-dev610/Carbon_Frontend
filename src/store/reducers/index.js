import auth from "./auth";

function rootReducer(state = {}, action) {
  return {
    auth: auth(state.auth, action),
  };
}
export default rootReducer;
