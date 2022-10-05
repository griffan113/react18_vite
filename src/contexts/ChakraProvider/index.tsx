import React from "react";
import {
  ChakraProvider as ChakraUIProvider,
  extendTheme,
  Theme as ChakraTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { extend } from "../../../theme.json";

const theme = extendTheme({
  semanticTokens: {
    colors: extend.colors,
  },
  fonts: {
    heading: extend.fontFamily.serif[0],
    body: extend.fontFamily.sans[0],
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props),
        color: mode("gray.900", "gray.50")(props),
      },
    }),
  },
  initialColorMode: "light",
  useSystemColorMode: false,
}) as ChakraTheme;

type ChakraProviderProps = {
  children: React.ReactNode;
};

const ChakraProvider: React.FC<ChakraProviderProps> = ({ children }) => (
  <ChakraUIProvider theme={theme}>{children}</ChakraUIProvider>
);

export { ChakraProvider, theme };
