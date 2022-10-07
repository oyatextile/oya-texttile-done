import { Box, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Contact from "../components/Contact";
const About: NextPage = () => {
  return (
    <Box color="black" py="4" bg="white">
      <Head>
        <title>OYA TEXTILE- We{"'"}re at your service! </title>
        <meta
          name="description"
          content="Reach us now and get information within a business day. info@oyatextile.com | +90 546 207 65 60 | 90 554 195 0 195"
        />
        <meta
          name="keywords"
          content="Turkish manufacturer, exporter, Turkey, Denizli"
        />
      </Head>

      <Box margin="auto" w="fit-content">
        <Contact />
      </Box>
      <hr />
    </Box>
  );
};
export default About;
