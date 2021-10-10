import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";
import { signOut } from "../redux/auth/userActions";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const history = useHistory();
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <Box
        d="flex"
        justifyContent="flex-end"
        alignItems="center"
        pt="10"
        pr="10"
      >
        {" "}
        {user ? (
          <>
            <Button onClick={() => dispatch(signOut())}>Logout</Button>
            <Link to="/profile">
              <Box marginLeft="4">
                <BiUserCircle width="3em" height="300" />
              </Box>
            </Link>
          </>
        ) : (
          <>
            <Button onClick={() => history.push("/auth")}>Sign In</Button>
          </>
        )}
      </Box>
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
