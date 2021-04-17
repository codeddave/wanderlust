import React from "react";
import { Box, Image } from "@chakra-ui/react";
import moment from "moment";
import { MdThumbUp } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const PostCard = ({
  title,
  description,
  image,
  createdAt,
  id,
  likes,
  setCurrentId,
}) => {
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box d="flex" justifyContent="flex-end" mt="2" mr="2">
        <MdEdit onClick={() => setCurrentId(id)} />
      </Box>
      <Image src={image} h="44" w="full" p="4" />

      <Box p="6" mt="2">
        <Box as="p" mt="1" fontWeight="semibold">
          {title}
        </Box>
        <Box as="p" mt="2" d="flex">
          {description}
        </Box>

        <Box d="flex" flexDirection="column" justifyContent="end">
          <Box
            d="flex"
            justifyContent="space-between"
            pt="4"
            alignItems="center"
          >
            <Box d="flex" alignItems="center" justifyContent="">
              <MdThumbUp mr="2" />{" "}
              <Box as="p" ml="2">
                likes {likes}
              </Box>
            </Box>
            <p>{moment(createdAt).fromNow()}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
