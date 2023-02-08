import { ROUTES } from "routes/constants/route";
import { Container, Paper } from "@mantine/core";
import AuthHeader from "components/auth/AuthHeader";
import RegisterForm from "components/auth/RegisterForm";

const Register = () => {
  return (
    <Container size={420} my={40}>
      <AuthHeader
        title="Register Here"
        routeDescription="Already have an account?"
        buttonTitle="Login"
        route={ROUTES.LOGIN}
      />
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <RegisterForm />
      </Paper>
    </Container>
  );
};

export default Register;
