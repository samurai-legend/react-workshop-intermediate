import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import AuthProvider from "./auth.provider";

const theme = {
  colorScheme: "light",
  colors: {
    primary: [
      "#d9fcff",
      "#affbfb",
      "#82f8f2",
      "#54f4e7",
      "#28f1da",
      "#0ed7cd",
      "#00a2a7",
      "#006e79",
      "#003e49",
      "#00161a",
    ],
  },
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: 30 },
    },
  },
};

const Providers = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
    >
      <NavigationProgress />
      <AuthProvider>{children}</AuthProvider>
    </MantineProvider>
  );
};

export { Providers };
