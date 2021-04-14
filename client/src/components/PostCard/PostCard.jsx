import React from "react";
import { Box, Image } from "@chakra-ui/react";

const PostCard = ({ title, description }) => {
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src="https://bit.ly/2k1H1t6" />

      <Box p="6" mt="2">
        <Box as="p" mt="1" fontWeight="semibold">
          Hey there
        </Box>
        <Box as="p" mt="2" d="flex">
          Hey there
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
