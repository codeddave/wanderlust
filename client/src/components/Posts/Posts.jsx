import React, { useEffect } from "react";
import PostCard from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostsStartAsync } from "../redux/posts/postActions";
import { Grid, GridItem } from "@chakra-ui/react";
const Posts = () => {
  const posts = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsStartAsync());
  }, []);
  console.log(posts);
  return (
    <>
      {posts.length < 1 ? (
        <p>Loading..</p>
      ) : (
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {posts.map((post) => (
            <PostCard
              title={post.title}
              description={post.description}
              key={post._id}
              createdAt={post.createdAt}
              image={post.selectedFile}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
