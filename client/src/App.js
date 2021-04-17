import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import NewPost from "./components/NewPost/NewPost";
import Posts from "./components/Posts/Posts";

function App() {
  const [currentId, setCurrentId] = useState(null);
  return (
    <div className="App">
      <Box d="flex" flexDirection="column" alignItems="center">
        <NewPost currentId={currentId} setCurrentId={setCurrentId} />
        <Posts setCurrentId={setCurrentId} />
      </Box>
    </div>
  );
}

export default App;
