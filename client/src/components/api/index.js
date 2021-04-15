import axios from "axios";

const url = "http://localhost:5006";
export const fetchPosts = async () => {
  try {
    const res = await axios.get(url);
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};
