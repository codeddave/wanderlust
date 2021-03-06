import {
  fetchPosts,
  createPostApi,
  updatePostApi,
  deletePostApi,
  likePostApi,
} from "../../api/posts.js";

const { postActionTypes } = require("./postActionTypes");

export const getPosts = (posts) => ({
  type: postActionTypes.FETCH_POSTS,
  payload: posts,
});

export const createPostStart = () => ({
  type: postActionTypes.CREATE_POST_START,
});
export const createPostSuccess = (post) => ({
  type: postActionTypes.CREATE_POST_SUCCESS,
  payload: post,
});
export const createPostFailure = (error) => ({
  type: postActionTypes.CREATE_POST_FAILURE,
  payload: error,
});
export const updatePost = (post) => ({
  type: postActionTypes.UPDATE_POST,
  payload: post,
});

export const deletePost = (id) => ({
  type: postActionTypes.DELETE_POST,
  payload: id,
});

export const likePost = (likedPost) => ({
  type: postActionTypes.LIKE_POST,
  payload: likedPost,
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

export const createPostStartAsync = (post, toast) => {
  return async (dispatch) => {
    dispatch(createPostStart());
    try {
      const postData = await createPostApi(post);

      dispatch(createPostSuccess(postData));
      toast({
        title: "Post created successfully!",
        status: "success",
      });
    } catch (error) {
      dispatch(createPostFailure(error));
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

export const likePostStartAsync = (id) => {
  return async (dispatch) => {
    try {
      const likedPost = await likePostApi(id);

      dispatch(likePost(likedPost));
    } catch (error) {
      console.log(error.message);
    }
  };
};
