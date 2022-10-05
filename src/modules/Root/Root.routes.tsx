import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../../shared/pages/NotFound";
import Home from "./pages/Home";

import RootLayout from "./Root.layout";

export const rootPaths = {
  home: {
    path: "/",
  },
};

const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={rootPaths.home.path} element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRoutes;
