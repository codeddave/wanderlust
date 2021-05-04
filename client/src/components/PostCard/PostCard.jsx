import React from "react";
import { Box, Image } from "@chakra-ui/react";
import moment from "moment";
import { MdThumbUp } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  deletePostStartAsync,
  likePostStartAsync,
} from "../redux/posts/postActions";
import { useDispatch } from "react-redux";

const PostCard = ({
  title,
  description,
  image,
  createdAt,
  id,
  likes,
  setCurrentId,
  creator,
  tags,
}) => {
  const dispatch = useDispatch();
  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="xl"
      position="relative"
      height="full"
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box position="absolute" pl="6">
        <Box as="p" mt="1" fontWeight="semibold" top="1">
          {creator}
        </Box>
      </Box>
      <Box>
        <Box d="flex" justifyContent="flex-end" mt="2" mr="2">
          <Box mr="4">
            <MdEdit onClick={() => setCurrentId(id)} mr="6" />
          </Box>
          <RiDeleteBin5Fill
            onClick={() => dispatch(deletePostStartAsync(id))}
          />
        </Box>

        <Image src={image} h="44" w="full" objectFit="cover" p="4" />
      </Box>

      <Box p="6" mt="2">
        <Box as="p" mt="1" fontWeight="semibold">
          {title}
        </Box>
        <Box as="p" mt="1" fontWeight="semibold" fontSize="sm">
          {tags.map((tag) => `#${tag} `)}
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
              <MdThumbUp
                mr="2"
                onClick={() => dispatch(likePostStartAsync(id))}
              />{" "}
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
