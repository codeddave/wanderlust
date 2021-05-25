import axios from "axios";

const url = "https://wander-lust-mern.herokuapp.com";

axios.defaults.headers.common["Authorization"] =
  "Bearer " +
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).userData
    ?.token;

export const signUp = async (userData) => {
  try {
    const res = await axios.post(`${url}/user/signup`, userData);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const signIn = async (userData) => {
  try {
    const res = await axios.post(`${url}/user/signin`, userData);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
