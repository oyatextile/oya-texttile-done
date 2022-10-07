import { Box, Center, Heading, Image } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
const Home = () => {
  return (
    <Box
      h={{ base: "100vh", sm: "fit-content" }}
      maxW="100%"
      __css={{}}
      position="relative"
    >
      <Head>
        <title>
          OYA TEXTILE - Custom- Made Textile Manufacturer & Exporters
        </title>
        <meta
          name="description"
          content="Get a quote for home, hotel and pet products from
        reputable manufacturer. products are manufactured with standards,
        market-matching quality, low MOQ competitive prices from lovely sales
        team."
        />
      </Head>
      <Image
        src="/images/background.jpeg"
        objectFit="cover"
        w="100%"
        h="100%"
        position="relative"
        __css={{
          zIndex: "0",
        }}
      />
      <Center>
        <Box position="absolute" top="50%" zIndex="1" w="fit-content">
          <Heading
            lineHeight="tall"
            as="h1"
            color="black"
            letterSpacing={4}
            textAlign="center"
            bg={"whiteAlpha.800"}
            fontSize={{ md: "4xl", base: "2xl", sm: "xl" }}
          >
            Custom-Made Textile Manufacturer
          </Heading>
          <Heading
            py="4"
            as="h3"
            px="4"
            margin="auto"
            w="fit-content"
            color="black"
            bg="whiteAlpha.800"
            textAlign="center"
            fontSize={{ md: "xl", base: "md", sm: "sm" }}
            letterSpacing={2}
          >
            Home, Hotel, Pet Textile
          </Heading>
        </Box>
      </Center>
      {/* <HTMLRenderer html={seo.seoBody} /> */}
    </Box>
  );
};

export default Home;
