import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signInStartAsync, signUpStartAsync } from "../redux/auth/userActions";
import { useToast } from "@chakra-ui/toast";
import { BiArrowBack } from "react-icons/bi";
import Loader from "react-loader-spinner";
import { selectIsLoading } from "../redux/auth/userSelectors";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from "formik-chakra-ui";
const Auth = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const isLoading = useSelector(selectIsLoading);
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
      dispatch(signInStartAsync(formData, history, toast));
    }
  };
  const handleSwitchMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: "", email: "", password: "" });
    setShowPassword(false);
  };
  const handleBackClick = () => {
    history.push("/");
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <Box
        position="absolute"
        top={["10", "20"]}
        left={["5", "20"]}
        cursor="pointer"
        onClick={handleBackClick}
      >
        <BiArrowBack />
      </Box>
      <Box
        pt={["40", "60"]}
        d="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box as="p" textAlign="center" fontWeight="bold" fontSize="xl">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Box>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, errors }) => (
            <Box
              as="form"
              maxW="sm"
              width={["90%", "xs"]}
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

              <InputControl
                name="email"
                label="Email"
                pt="2"
                placeholder="Email"
              />
              <InputControl
                name="password"
                label="Password"
                pt="2"
                placeholder="Password"
              />

              {/*  <FormControl pt="2">
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
                    children={
                      showPassword ? <MdVisibilityOff /> : <MdVisibility />
                    }
                    onClick={handlePasswordVisibility}
                  />
                </InputGroup>
              </FormControl> */}

              <SubmitButton mt="3" disabled={Object.keys(errors).length}>
                {isSignUp ? "Sign Up" : "Sign In"}
              </SubmitButton>

              <Box as="p" mt="3" fontSize="sm">
                {" "}
                {isSignUp
                  ? "Are you already a member?"
                  : "Don't have an account yet?"}{" "}
                <Box
                  as="button"
                  fontWeight="bold"
                  onClick={handleSwitchMode}
                  type="button"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </Box>
                {isLoading ? (
                  <Box as="span" display="inline-block" pt="2" ml="3">
                    <Loader
                      type="TailSpin"
                      color="#000000"
                      height={20}
                      width={20}
                    />
                  </Box>
                ) : null}
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Auth;
