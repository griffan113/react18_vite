import { Outlet } from "react-router-dom";
import { Fade } from "@chakra-ui/react";

import Header from "../../components/Header";

const RootLayout: React.FC = () => (
  <Fade in>
    <div className="min-h-screen">
      <Header />
      <Outlet />
    </div>
  </Fade>
);

export default RootLayout;
