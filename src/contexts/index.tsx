import React from "react";
import { BrowserRouter as RouterProvider } from "react-router-dom";

import { ComposeContexts } from "../utils/ComposeContexts";
import { ChakraProvider } from "./ChakraProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ComposeContexts with={[RouterProvider, ChakraProvider]}>
      {children}
    </ComposeContexts>
  );
};

export default AppProvider;
