import axios from "axios";

const url = "https://wander-lust-mern.herokuapp.com/posts";
axios.defaults.headers.common["Authorization"] =
  "Bearer " +
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).userData
    ?.token;
export const fetchPosts = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createPostApi = async (post) => {
  try {
    const res = await axios.post(url, post);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePostApi = async (id, post) => {
  try {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostApi = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const likePostApi = async (id) => {
  try {
    const res = await axios.patch(`${url}/${id}/likePost`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
