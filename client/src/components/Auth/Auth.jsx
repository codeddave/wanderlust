import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <Box
        d="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          as="form"
          maxW="sm"
          width="xs"
          borderRadius="lg"
          overflow="hidden"
          p="4"
        >
          {isSignUp ? (
            <FormControl>
              <FormLabel> Name</FormLabel>
              <Input type="text" placeholder="Name" name="name" />
            </FormControl>
          ) : null}

          <FormControl>
            <FormLabel> Email</FormLabel>
            <Input type="text" placeholder="Email" name="password" />
          </FormControl>
          <FormControl>
            <FormLabel> Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
              />

              <InputRightAddon
                children={showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                onClick={handlePasswordVisibility}
              />
            </InputGroup>
          </FormControl>

          <Button>{isSignUp ? "Sign Up" : "Sign In"}</Button>

          <Box as="p">
            {" "}
            Are you already a member?{" "}
            <Box as="button" onClick={() => setIsSignUp(false)} type="button">
              Sign In
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Auth;
