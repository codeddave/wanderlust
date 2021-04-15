import { Box } from "@chakra-ui/layout";
import NewPost from "./components/NewPost/NewPost";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Box d="flex" flexDirection="column" alignItems="center">
        <NewPost />
        <Posts />
      </Box>
    </div>
  );
}

export default App;
