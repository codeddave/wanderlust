import axios from "axios";

const url = "http://localhost:5006";

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
    const res = await axios.post(`${url}/user/signIn`, userData);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
