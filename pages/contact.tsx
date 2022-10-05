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
        {/* <title>Oyahome</title> */}
        {/* <React.Fragment
          dangerouslySetInnerHTML={{ __html: seo.seoTagsHead }}
        ></React.Fragment> */}
      </Head>
      {/* <p dangerouslySetInnerHTML={{ __html: seo?.seoBody }}></p> */}
      {/* <Heading
        textAlign="center"
        letterSpacing={4}
        fontSize={{ base: "4xl", lg: "7xl" }}
      >
        OYA Ev Tekstili{" "}
      </Heading>
      <Heading
        textAlign="center"
        letterSpacing={4}
        fontSize={{ base: "sm", lg: "xl" }}
        py="4"
      >
        Custom-made manufacturer{" "}
      </Heading> */}
      <Box margin="auto" w="fit-content">
        <Contact />
      </Box>
      <hr />
    </Box>
  );
};

// export async function getStaticProps() {
//   var { data } = await client.query({
//     query: getSeoForPate,
//     variables: {
//       name: "/index.php/carrer/",
//     },
//   });
//   return {
//     props: {
//       seo: data.page.seo,
//     },
//   };
// }
export default About;
