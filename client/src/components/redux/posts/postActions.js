import {
  fetchPosts,
  createPostApi,
  updatePostApi,
  deletePostApi,
} from "../../api";

const { postActionTypes } = require("./postActionTypes");

export const getPosts = (posts) => ({
  type: postActionTypes.FETCH_POSTS,
  payload: posts,
});

export const createPost = (post) => ({
  type: postActionTypes.CREATE_POST,
  payload: post,
});
export const updatePost = (post) => ({
  type: postActionTypes.UPDATE_POST,
  payload: post,
});

export const deletePost = (id) => ({
  type: postActionTypes.DELETE_POST,
  payload: id,
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

export const updatePostStartAsync = (id, post) => {
  return async (dispatch) => {
    try {
      const data = await updatePostApi(id, post);
      dispatch(updatePost(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deletePostStartAsync = (id) => {
  return async (dispatch) => {
    try {
      await deletePostApi(id);
      dispatch(deletePost(id));
    } catch (error) {
      console.log(error);
    }
  };
};
