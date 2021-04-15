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
import React, { useState } from "react";
import FileBase from "react-file-base64";
//create post
const NewPost = () => {
  const [postData, setPostData] = useState({
    creator: "",
    description: "",
    selectedFile: "",
    title: "",
  });
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
      >
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
        <FormControl id="text">
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            type="text"
            id="title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            value={postData.title}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
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
