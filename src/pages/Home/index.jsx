import {
  AppShell,
  Avatar,
  Button,
  Container,
  Divider,
  Group,
  Header,
  Navbar,
  NavLink,
  Paper,
  Title,
} from "@mantine/core";
import Exercise from "components/Exercise";
import { useAuth } from "hooks/useAuth";
import { supabase } from "lib/supabase";

const Home = () => {
  const { user } = useAuth();

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }}>
          <Title order={3} p="sm">
            References
          </Title>
          <Divider />
          <NavLink label="Library used in this project" childrenOffset={28}>
            <NavLink
              label="React Docs"
              component="a"
              href="https://beta.reactjs.org"
              target="_blank"
            />
            <NavLink
              label="Mantine.UI"
              component="a"
              href="https://mantine.dev"
              target="_blank"
            />
            <NavLink
              label="Supabase"
              component="a"
              href="https://supabase.com"
              target="_blank"
            />
            <NavLink
              label="Sass"
              component="a"
              href="https://sass-lang.com"
              target="_blank"
            />
          </NavLink>

          <NavLink
            label="Extra Library/Meta-Frameworks"
            childrenOffset={28}
            defaultOpened
          >
            <NavLink
              label="Svelte Kit"
              component="a"
              href="https://kit.svelte.dev"
              target="_blank"
            />
            <NavLink
              label="Next.Js"
              component="a"
              href="https://nextjs.org"
              target="_blank"
            />
            <NavLink
              label="Solid.Js"
              component="a"
              href="https://www.solidjs.com"
              target="_blank"
            />
            <NavLink
              label="Tailwind"
              component="a"
              href="https://tailwindcss.com"
              target="_blank"
            />
            <NavLink
              label="GSAP"
              component="a"
              href="https://greensock.com/gsap"
              target="_blank"
            />
            <NavLink
              label="Framer Motion"
              component="a"
              href="https://www.framer.com/motion"
              target="_blank"
            />
            <NavLink
              label="Remix"
              component="a"
              href="https://remix.run"
              target="_blank"
            />
          </NavLink>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Container size="xl">
            <Group position="apart">
              <Group position="left">
                <Avatar color="cyan" radius="xl" />
                <Title order={6}>{user.email}</Title>
              </Group>
              <Button color="primary" onClick={signOut}>
                Sign Out
              </Button>
            </Group>
          </Container>
        </Header>
      }
    >
      <Paper withBorder shadow="md" radius="md">
        <Exercise />
      </Paper>
    </AppShell>
  );
};

export default Home;
