import { Box } from "@chakra-ui/layout";
import { toast } from "@chakra-ui/toast";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PostCard from "../PostCard/PostCard";
import { getUserProfileDataStartAsync } from "../redux/auth/userActions";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userProfile, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserProfileDataStartAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      toast.notify("you need to be logged in");
      history.push("/auth");
    }
  }, [user, history]);

  console.log(user);
  console.log(userProfile);

  //console.log(userProfile);
  return (
    <div>
      <Box
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt="40"
      >
        <p>{userProfile?.user?.name}</p>
        <p>{userProfile?.user?.email}</p>
        {userProfile && userProfile.posts && userProfile.posts.length ? (
          <Box>
            {userProfile?.posts.map((post) => (
              <PostCard
                tags={post.tags}
                name={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                createdAt={post.createdAt}
                likes={post.likes}
                image={post.selectedFile}
                creator={post.creator}
              />
            ))}
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Profile;
