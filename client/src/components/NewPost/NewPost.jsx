import { Box } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const NewPost = () => {
  return (
    <div>
      <Box
        maxW="sm"
        width="xs"
        borderRadius="lg"
        overflow="hidden"
        mt="20"
        mb="40"
      >
        <FormControl id="text">
          <FormLabel>Title</FormLabel>
          <Input type="text" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="email" mt="6">
          <FormLabel>Description</FormLabel>
          <Textarea />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Box>
    </div>
  );
};

export default NewPost;
