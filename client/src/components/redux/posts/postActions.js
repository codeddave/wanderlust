import { fetchPosts } from "../../api";

const { postActionTypes } = require("./postActionTypes");

export const getPosts = (posts) => ({
  type: postActionTypes.FETCH_POSTS,
  payload: posts,
});

export const getPostsStartAsync = () => {
  return async (dispatch) => {
    try {
      const posts = await fetchPosts();
      dispatch(getPosts(posts));
    } catch (error) {}
  };
};
