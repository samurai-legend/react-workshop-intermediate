/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Center,
  LoadingOverlay,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/constants/route";
import { UserRegister } from "services/user.service";

const RegisterForm = () => {
  // hook for router navigator
  const navigate = useNavigate();

  const [isRegisterError, setIsRegisterError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        /(?=.*[0-9])/.test(value) ? null : "Require at least one digit.",
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const onRegister = async (values) => {
    setIsLoading(true);
    const [data, error] = await UserRegister({
      email: values.email,
      password: values.password,
    });

    if (data) {
      setIsRegisterError(null);
      navigate(ROUTES.LOGIN);
    }

    if (error) {
      setIsRegisterError(error.message);
    }

    setIsLoading(false);
  };
  return (
    <form onSubmit={form.onSubmit(onRegister)}>
      <TextInput
        label="Email"
        placeholder="you@workshop.dev"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        mt="md"
        {...form.getInputProps("password")}
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm password"
        mt="md"
        {...form.getInputProps("confirmPassword")}
      />
      <Button fullWidth mt="xl" type="submit">
        Sign in
      </Button>

      {isRegisterError && (
        <Center mt={20}>
          <Text size="xs" fw={700} color="red">
            {isRegisterError}
          </Text>
        </Center>
      )}
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
    </form>
  );
};

export default RegisterForm;
