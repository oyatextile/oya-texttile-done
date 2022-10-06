import { Box, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Contact from "../components/Contact";
import SeoTags from "../components/seoTags";
import client, { getSeoForPate } from "../lib/apollo-client";
const About: NextPage = () => {
  return (
    <Box color="black" py="4" bg="white">
      <Head>
        <title>
          Get a quote for home, hotel and pet products from reputable
        </title>
        <meta
          name="keywords"
          content="Get a quote for home, hotel and pet products from
        reputable manufacturer. products are manufactured with standards,
        market-matching quality, low MOQ competitive prices from lovely sales
        team."
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
