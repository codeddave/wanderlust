import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      <Box>
        <FormControl>
          <FormLabel> Name</FormLabel>
          <Input type="text" placeholder="Name" name="name" />
        </FormControl>
        <FormControl>
          <FormLabel> Email</FormLabel>
          <Input type="text" placeholder="Email" name="password" />
        </FormControl>
      </Box>
    </div>
  );
};

export default Auth;
