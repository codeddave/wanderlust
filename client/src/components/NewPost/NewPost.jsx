import { Box } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import {
  createPostStartAsync,
  updatePostStartAsync,
} from "../redux/posts/postActions";
//create post
const NewPost = ({ setCurrentId, currentId }) => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  console.log(currentId);
  const postToUpdate = currentId
    ? posts.find((post) => post._id === currentId)
    : null;

  const [postData, setPostData] = useState({
    creator: "",
    description: "",
    selectedFile: "",
    title: "",
    tags: "",
  });

  useEffect(() => {
    if (postToUpdate) setPostData(postToUpdate);
    console.log(postToUpdate + "hksfvkablbla");
  }, [postToUpdate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePostStartAsync(currentId, postData));
    } else {
      dispatch(createPostStartAsync(postData));
    }
    setCurrentId(null);
    setPostData({
      creator: "",
      description: "",
      selectedFile: "",
      title: "",
      tags: "",
    });
    /*   ; */
  };
  return (
    <div>
      <Box
        maxW="sm"
        width="xs"
        borderRadius="lg"
        overflow="hidden"
        mt="20"
        mb="20"
        as="form"
        onSubmit={handleSubmit}
      >
        <Box as="p" textAlign="center">
          {currentId ? "Edit" : "Create"} a Memory{" "}
        </Box>
        <FormControl id="creator">
          <FormLabel htmlFor="creator">Creator</FormLabel>
          <Input
            type="text"
            id="creator"
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
            value={postData.creator}
          />
        </FormControl>
        <FormControl id="title">
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            type="text"
            id="title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            value={postData.title}
          />
        </FormControl>
        <FormControl id="description" mt="6">
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
            value={postData.description}
          />
        </FormControl>
        <FormControl id="tags">
          <FormLabel htmlFor="tags">Tags</FormLabel>
          <Input
            type="text"
            id="tags"
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
            value={postData.tags}
          />
        </FormControl>
        <Box ml="2">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Box>
        <Button colorScheme="teal" mt="4" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default NewPost;
