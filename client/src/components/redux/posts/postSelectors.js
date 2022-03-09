import { createSelector } from "reselect";

const getPost = (state) => state.post;
export const selectPosts = createSelector(getPost, (post) => post.posts);
export const selectIsLoadingPosts = createSelector(
  getPost,
  (post) => post.isLoading
);
