import axios from "axios";

const url = "http://localhost:5006/posts";
export const fetchPosts = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
