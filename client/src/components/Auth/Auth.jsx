import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signInStartAsync, signUpStartAsync } from "../redux/auth/userActions";
import { useToast } from "@chakra-ui/toast";
import { BiArrowBack } from "react-icons/bi";
import Loader from "react-loader-spinner";
import { selectIsLoading } from "../redux/auth/userSelectors";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputControl } from "formik-chakra-ui";

const Auth = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const isLoading = useSelector(selectIsLoading);
  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = (values) => {
    if (isSignUp) {
      dispatch(signUpStartAsync(values, history, toast));
    } else {
      dispatch(signInStartAsync(values, history, toast));
    }
  };
  const handleSwitchMode = () => {
    setIsSignUp(!isSignUp);
  };
  const handleBackClick = () => {
    history.push("/");
  };
  const validationSchema = Yup.object({
    fullName: isSignUp
      ? Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Please enter your full name")
          .test("invalid", "Must include first and last name", (name) =>
            /^[a-zA-Z]+ [a-zA-Z]+/.test(name || "")
          )
      : Yup.string(),
    email: Yup.string()
      .trim()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .email("Invalid email")
      .required("Please enter your email"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter a password"),
  });

  const getInitialValues = () => {
    if (isSignUp) {
      return {
        fullName: "",
        email: "",
        password: "",
      };
    } else {
      return {
        email: "",
        password: "",
      };
    }
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
          initialValues={getInitialValues()}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleSubmit,
            values,
            setFieldValue,
            setFieldTouched,
            errors,
          }) => (
            <Box
              as="form"
              maxW="sm"
              width={["90%", "xs"]}
              borderRadius="lg"
              p="4"
              onSubmit={handleSubmit}
            >
              {isSignUp ? (
                <InputControl
                  name="fullName"
                  label="Full Name"
                  pt="2"
                  placeholder="Full Name"
                />
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

              <Button
                type="submit"
                colorScheme="teal"
                mt="3"
                disabled={Object.keys(errors).length}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>

              <Box as="p" mt="3" fontSize="sm">
                {" "}
                {isSignUp
                  ? "Are you already a member?"
                  : "Don't have an account yet?"}{" "}
                <Box
                  as="button"
                  fontWeight="bold"
                  onClick={() => {
                    setFieldValue("fullName", "");
                    setFieldValue("password", "");
                    setFieldTouched("email", false);
                    setFieldTouched("password", false);
                    setFieldTouched("fullName", false);

                    setFieldValue("email", "");
                    handleSwitchMode();
                  }}
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
