import { fetchPosts, createPostApi } from "../../api";

const { postActionTypes } = require("./postActionTypes");

export const getPosts = (posts) => ({
  type: postActionTypes.FETCH_POSTS,
  payload: posts,
});

export const createPost = (post) => ({
  type: postActionTypes.CREATE_POST,
  payload: post,
});
export const getPostsStartAsync = () => {
  return async (dispatch) => {
    try {
      const posts = await fetchPosts();
      dispatch(getPosts(posts));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createPostStartAsync = (post) => {
  return async (dispatch) => {
    try {
      const postData = await createPostApi(post);

      dispatch(createPost(postData));
    } catch (error) {
      console.log(error.message);
    }
  };
};
