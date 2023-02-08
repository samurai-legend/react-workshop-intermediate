import React from "react";
import { Paper, Container } from "@mantine/core";
import { ROUTES } from "routes/constants/route";
import AuthHeader from "components/auth/AuthHeader";
import LoginForm from "components/auth/LoginForm";

const Login = () => {
  return (
    <Container size={420} my={40}>
      <AuthHeader
        title="Welcome!"
        routeDescription="Do not have an account yet?"
        buttonTitle="Create account"
        route={ROUTES.REGISTER}
      />
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <LoginForm />
      </Paper>
    </Container>
  );
};

export default Login;
