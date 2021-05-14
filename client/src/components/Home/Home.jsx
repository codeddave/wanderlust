import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { useSelector } from "react-redux";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const user = useSelector((state) => state.user.userData);

  return (
    <div className="Home">
      <Box d="flex" flexDirection="column" alignItems="center">
        {user ? (
          <NewPost currentId={currentId} setCurrentId={setCurrentId} />
        ) : (
          <Box as="p" marginY="40">
            {" "}
            Please Sign In to create your memories.
          </Box>
        )}
        <Posts setCurrentId={setCurrentId} />
      </Box>
    </div>
  );
}

export default Home;
