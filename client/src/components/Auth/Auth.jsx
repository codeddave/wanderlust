import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signInStartAsync, signUpStartAsync } from "../redux/auth/userActions";
const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUpStartAsync(formData, history));
    } else {
      dispatch(signInStartAsync(formData, history));
    }
  };
  const handleSwitchMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: "", email: "", password: "" });
    setShowPassword(false);
  };
  return (
    <div>
      <Box
        pt={["40", "60"]}
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
          p="4"
          onSubmit={handleSubmit}
        >
          {isSignUp ? (
            <FormControl>
              <FormLabel> Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>
          ) : null}

          <FormControl pt="2">
            <FormLabel> Email</FormLabel>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl pt="2">
            <FormLabel> Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <InputRightAddon
                children={showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                onClick={handlePasswordVisibility}
              />
            </InputGroup>
          </FormControl>

          <Button mt="3" type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <Box as="p">
            {" "}
            {isSignUp
              ? "Are you already a member?"
              : "Don't have an account yet?"}{" "}
            <Box as="button" onClick={handleSwitchMode} type="button">
              {isSignUp ? "Sign In" : "Sign Up"}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Auth;
