import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import {
  deletePostStartAsync,
  likePostStartAsync,
} from "../redux/posts/postActions";
import { useDispatch, useSelector } from "react-redux";

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
  name,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleLikes = () => {
    if (likes.length > 0) {
      const userLiked = likes.find((like) => like === user?._id);
      return userLiked ? (
        <Box d="flex" alignItems="center">
          <RiThumbUpFill color="#158E83" />

          <Text fontSize="sm" pl="1">
            {" "}
            {likes.length > 2
              ? `You and ${likes.length - 1} others`
              : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
          </Text>
        </Box>
      ) : (
        <Box d="flex" alignItems="center">
          <RiThumbUpLine />
          <Box pl="1">
            {likes.length} {likes.length === 1 ? "Like" : "Likes"}
          </Box>
        </Box>
      );
    }

    return (
      <Box d="flex" alignItems="center">
        {" "}
        <RiThumbUpLine />
        <Box pl="1">Like</Box>{" "}
      </Box>
    );
  };
  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      w={["10, xl"]}
      position="relative"
      height="full"
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* <Box position="absolute" pl="6">
        <Box as="p" mt="1" fontWeight="semibold" top="1">
          {name}
        </Box>
      </Box> */}
      <Box>
        {user?._id === creator ? (
          <Box d="flex" justifyContent="flex-end" mt="2" mr="2">
            <Box mr="4">
              <MdEdit onClick={() => setCurrentId(id)} mr="6" />
            </Box>
            <RiDeleteBin5Fill
              onClick={() => dispatch(deletePostStartAsync(id))}
            />
          </Box>
        ) : null}

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
            <Box d="flex" alignItems="center" justifyContent="center">
              <Box
                as="button"
                onClick={() => dispatch(likePostStartAsync(id))}
                disabled={!user}
              >
                {handleLikes()}
              </Box>
            </Box>

            <Box>
              <p>{moment(createdAt).fromNow()}</p>
            </Box>
          </Box>
        </Box>
        <Text fontSize="sm" textAlign="right" mt="2">
          <i>- {name}</i>
        </Text>
      </Box>
    </Box>
  );
};

export default PostCard;
