import { Box, Center, Heading, Image, Show, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import TabsCategory from "../../components/TabsCategory";

import client, {
  getAllproductByPage,
  getSeoForPate,
} from "../../lib/apollo-client";
const HeadCat = () => {
  return (
    <Box justifyContent="center" w="full" alignItems="center">
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
      <Show above="md">
        <Image src="/images/Banner/1.jpg" w="full" />
      </Show>
      <Heading textAlign="center" py="4">
        {" "}
        BATH{" "}
      </Heading>
      <Text
        textAlign="center"
        px="4"
        fontSize={"14"}
        py="2"
        w="fit-content"
        margin={"auto"}
        maxW="4xl"
      >
        Each family deserves a lovely bathing hours and it would be complete
        with OYA’s Bath Collection.
      </Text>
      <Text
        textAlign="center"
        px="4"
        py="2"
        fontSize={"14"}
        w="fit-content"
        margin={"auto"}
        maxW="2xl"
      >
        OYA’s products for bathing are manufactured with standards, in addition
        to a competitive price to match your country’s market requirements and
        needs.
      </Text>
    </Box>
  );
};

const Bath = ({ body, seo }: any) => {
  const head = ["Towel", "Bathmat", "Bathrobe"];
  return (
    <Box justifyContent="center" alignItems="center" bg="white" color="black">
      <Center pb="6">
        <HeadCat />
      </Center>
      <TabsCategory head={head} body={body} />
    </Box>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "TOWEL",
    },
  });
  const body = [data.productCategory.products.nodes];
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "BATHMAT",
    },
  });
  body.push(data.productCategory.products.nodes);
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "BATHROBE",
    },
  });
  body.push(data.productCategory.products.nodes);
  // var { data } = await client.query({
  //   query: getSeoForPate,
  //   variables: {
  //     name: "/index.php/baby/",
  //   },
  // });
  return {
    props: {
      body: body,
      // seo: data.page.seo,
    },
  };
}

export default Bath;
