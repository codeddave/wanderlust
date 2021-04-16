import React from "react";
import { Box, Image } from "@chakra-ui/react";
import moment from "moment";
import { MdThumbUp } from "react-icons/md";
const PostCard = ({ title, description, image, createdAt, likes }) => {
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} h="44" w="full" p="4" />

      <Box p="6" mt="2">
        <Box as="p" mt="1" fontWeight="semibold">
          {title}
        </Box>
        <Box as="p" mt="2" d="flex">
          {description}
        </Box>
        <Box d="flex" justifyContent="space-between" pt="4" alignItems="center">
          <Box d="flex" alignItems="center">
            <MdThumbUp mr="2" />{" "}
            <Box as="p" ml="2">
              likes {likes}
            </Box>
          </Box>
          <p>{moment(createdAt).fromNow()}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
