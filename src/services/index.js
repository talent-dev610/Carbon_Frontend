import axios from "axios";

axios.defaults.baseURL = "http://192.168.115.169:5005";

const signInUser = async (props) => {
  var result = await axios.post("/api/login/", props);
  return result;
};

const userRegister = async (props) => {
  try {
    var result = await axios.post("/api/userRegister/", props, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return result.data;
  } catch (error) {
    return error.response;
  }
};

export { userRegister, signInUser };
