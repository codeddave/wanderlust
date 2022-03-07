import axios from "axios";

const url = "https://wander-lust-mern.herokuapp.com";
const token = localStorage.getItem("persist:root")
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).userData
      ?.token
  : "";

axios.defaults.headers.common["Authorization"] = "Bearer " + token;

export const signUp = async (userData, toast) => {
  try {
    const res = await axios.post(`${url}/user/signup`, userData);
    return res.data;
  } catch (error) {
    if (error.response.data.message) {
      toast({
        title: error.response.data.message,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Something went wrong, please try again",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      console.log(error.response.data.message);
    }
  }
};

export const signIn = async (userData, toast) => {
  try {
    const res = await axios.post(`${url}/user/signin`, userData);
    return res.data;
  } catch (error) {
    if (error.response.data.message) {
      toast({
        title: error.response.data.message,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Something went wrong, please try again",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      console.log(error.response.data.message);
    }
  }
};

export const getUserProfileDataApi = async () => {
  try {
    const res = await axios.get(`${url}/user/get-user-data`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
