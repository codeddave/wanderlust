import { Box } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  //FormErrorMessage,
  Input,
  //FormHelperText,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import {
  createPostStartAsync,
  updatePostStartAsync,
} from "../redux/posts/postActions";
import { GrFormClose } from "react-icons/gr";
import { selectIsLoadingPosts } from "../redux/posts/postSelectors";
import Loader from "react-loader-spinner";
//create post
const NewPost = ({ setCurrentId, currentId }) => {
  const toast = useToast();
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const createPostLoading = useSelector(selectIsLoadingPosts);

  //console.log(currentId);
  const postToUpdate = currentId
    ? posts.find((post) => post._id === currentId)
    : null;

  const [postData, setPostData] = useState({
    description: "",
    selectedFile: "",
    title: "",
    tags: "",
  });

  useEffect(() => {
    if (postToUpdate) setPostData(postToUpdate);
  }, [postToUpdate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePostStartAsync(currentId, postData));
    } else {
      dispatch(createPostStartAsync({ ...postData, name: user.name }, toast));
    }
    setCurrentId(null);
    setPostData({
      description: "",
      selectedFile: "",
      title: "",
      tags: "",
    });
    /*   ; */
  };
  const handleCloseEdit = () => {
    setCurrentId(null);
    setPostData({
      description: "",
      selectedFile: "",
      title: "",
      tags: "",
    });
  };
  return (
    <div>
      <Box
        maxW="sm"
        width="xs"
        borderRadius="lg"
        overflow="hidden"
        padding={10}
        mt={["2", "8", "16"]}
        mb={["2", "8", "16"]}
        as="form"
        onSubmit={handleSubmit}
        position="relative"
      >
        <Box as="p" textAlign="center" fontWeight="bold">
          {currentId ? "Edit" : "Create"} a Memory{" "}
        </Box>
        {currentId ? (
          <Box
            position="absolute"
            right="0"
            cursor="pointer"
            onClick={handleCloseEdit}
          >
            <GrFormClose />
          </Box>
        ) : null}

        <FormControl id="title" mt="5">
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
        <Box mt="2">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Box>
        <Box mt="4" display="flex" alignItems="center">
          <Button colorScheme="teal" type="submit" mr="2">
            Submit
          </Button>

          {createPostLoading ? (
            <Loader type="TailSpin" color="#000000" height={20} width={20} />
          ) : null}
        </Box>
      </Box>
    </div>
  );
};

export default NewPost;
