import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { useSelector } from "react-redux";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const user = useSelector((state) => state.user.userData);
  console.log(user);
  return (
    <div className="Home">
      <Box d="flex" flexDirection="column" alignItems="center">
        <NewPost currentId={currentId} setCurrentId={setCurrentId} />
        <Posts setCurrentId={setCurrentId} />
      </Box>
    </div>
  );
}

export default Home;
