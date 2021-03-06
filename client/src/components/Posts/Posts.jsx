import React, { useEffect } from "react";
import PostCard from "../PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostsStartAsync } from "../redux/posts/postActions";
//import { Grid } from "@chakra-ui/react";
import Loader from "react-loader-spinner";
import "./Posts.css";
import { Box } from "@chakra-ui/react";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsStartAsync());
  }, [dispatch]);
  return (
    <div className="posts-container">
      {!posts || !posts.length ? (
        <Box marginBottom={20}>
          <Loader type="TailSpin" color="#000000" height={50} width={50} />
        </Box>
      ) : (
        <div className="posts">
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
        </div>
      )}
    </div>
  );
};

export default Posts;
