import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";

function Home() {
  const [currentId, setCurrentId] = useState(null);
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
