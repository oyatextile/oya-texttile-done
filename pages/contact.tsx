import { Box, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Contact from "../components/Contact";
const About: NextPage = () => {
  return (
    <Box color="black" py="4" bg="white">
      <Heading
        textAlign="center"
        letterSpacing={4}
        fontSize={{ base: "4xl", lg: "7xl" }}
      >
        OYA Ev Tekstil{" "}
      </Heading>
      <Heading
        textAlign="center"
        letterSpacing={4}
        fontSize={{ base: "sm", lg: "xl" }}
        py="4"
      >
        Costum-made manufacturer{" "}
      </Heading>
      <Box margin="auto" w="fit-content">
        <Contact />
       
      </Box>
      <hr />
    </Box>
  );
};
export default About;
