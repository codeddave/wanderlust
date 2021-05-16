import React, { useEffect } from "react";
import PostCard from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostsStartAsync } from "../redux/posts/postActions";
import { Grid } from "@chakra-ui/react";
import Loader from "react-loader-spinner";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsStartAsync());
  }, [dispatch]);
  return (
    <>
      {posts.length < 1 ? (
        <Loader type="TailSpin" color="#000000" height={100} width={100} />
      ) : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
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
              name={post.name}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
