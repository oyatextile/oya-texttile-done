import { Box, Center, Heading, Image, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import SeoTags from "../components/seoTags";
import client, { getSeoForPate } from "../lib/apollo-client";

const Home: NextPage = ({ seo }: any) => {
  console.log(seo);
  const content = `${seo.seoTagsHead}`;

  return (
    <Box
      h={{ base: "100vh", sm: "fit-content" }}
      maxW="100%"
      __css={{}}
      position="relative"
    >
      <Head>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </Head>
      <p dangerouslySetInnerHTML={{ __html: seo?.seoBody }}></p>{" "}
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
          {/* </Box>
        <Box position="absolute" top="30%" zIndex="1" w="fit-content" py='1'> */}
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
    </Box>
  );
};

export async function getStaticProps() {
  var { data } = await client.query({
    query: getSeoForPate,
    variables: {
      name: "/index.php/landing-page/",
    },
  });
  return {
    props: {
      seo: data.page.seo,
    },
  };
}

export default Home;
