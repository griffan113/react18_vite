import React from "react";
import { Link as RoutingLink } from "react-router-dom";
import { Heading, Text, Button, Fade } from "@chakra-ui/react";

const NotFound: React.FC = () => {
  return (
    <Fade in>
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <Heading
          display="inline-block"
          as="h1"
          size="4xl"
          p="1"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          as={RoutingLink}
          to="/"
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </main>
    </Fade>
  );
};

export default NotFound;
