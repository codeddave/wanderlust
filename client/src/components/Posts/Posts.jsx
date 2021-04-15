import React, { useEffect } from "react";
import PostCard from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostsStartAsync } from "../redux/posts/postActions";
const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsStartAsync());
  }, []);
  const posts = useSelector((state) => state.post.posts);
  console.log(posts);

  return <PostCard />;
};

export default Posts;
