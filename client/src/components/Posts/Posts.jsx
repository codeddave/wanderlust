import React, { useEffect } from "react";
import PostCard from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostsStartAsync } from "../redux/posts/postActions";
import { Grid } from "@chakra-ui/react";
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsStartAsync());
  }, [dispatch]);
  return (
    <>
      {posts.length < 1 ? (
        <p>Loading..</p>
      ) : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={4}
        >
          {posts.map((post) => (
            <PostCard
              title={post.title}
              description={post.description}
              key={post._id}
              createdAt={post.createdAt}
              image={post.selectedFile}
              likes={post.likes}
              id={post._id}
              setCurrentId={setCurrentId}
              creator={post.creator}
              tags={post.tags}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
