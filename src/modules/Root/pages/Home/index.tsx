import React from "react";
import { Heading } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <main className="m-5 flex flex-col items-center">
      <Heading as="h1" className="text-2xl font-bold text-blue-300 text-center">
        A project with ReactRouter@v6, Vite, Chakra and Tailwind! 💪
      </Heading>
    </main>
  );
};

export default Home;
