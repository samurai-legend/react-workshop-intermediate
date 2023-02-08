import React from "react";
import { Title, Text, Button, Container, Group, Paper } from "@mantine/core";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/constants/route";

export function NotFound() {
  return (
    <Container size={420} my={100}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Title size="h1" align="center">
          404
        </Title>
        <Title size="h3">You have found a secret place.</Title>
        <Text color="dimmed" size="lg" align="center">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
      </Paper>
      <Group position="center" my="lg">
        <Button component={Link} to={ROUTES.ROOT} variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
