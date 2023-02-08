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
import { UserLogin } from "services/user.service";

const LoginForm = () => {
  // hook for router navigator
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(null);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        /(?=.*[0-9])/.test(value) ? null : "Require at least one digit.",
    },
  });

  const onLogin = async (values) => {
    setIsLoading(true);
    const [data, error] = await UserLogin({
      email: values.email,
      password: values.password,
    });

    if (data) {
      console.log(data);
      setIsLoginError(null);
      navigate(ROUTES.ROOT);
    }

    if (error) {
      setIsLoginError(error.message);
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={form.onSubmit(onLogin)}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="you@mantine.dev"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        withAsterisk
        label="Password"
        placeholder="Your password"
        mt="md"
        {...form.getInputProps("password")}
      />
      {/* TODO:// Implement Forgot Password */}
      {/* <Group position="apart" mt="lg">
        <Anchor
          component="a"
          onClick={(event) => event.preventDefault()}
          href="#"
          size="sm"
        >
          Forgot password?
        </Anchor>
      </Group> */}
      <Button fullWidth mt="xl" type="submit">
        Sign in
      </Button>

      {isLoginError && (
        <Center mt={20}>
          <Text size="xs" fw={700} color="red">
            {isLoginError}
          </Text>
        </Center>
      )}
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
    </form>
  );
};

export default LoginForm;
