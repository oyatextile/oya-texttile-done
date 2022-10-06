import { Box, Center, Heading, Image, Show, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import SeoTags from "../../components/seoTags";
import TabsCategory from "../../components/TabsCategory";

import client, {
  getAllproductByPage,
  getSeoForPate,
} from "../../lib/apollo-client";
const HeadCat = () => {
  return (
    <Box justifyContent="center" w="full" alignItems="center">
      <Show above="md">
        <Image src="/images/Banner/2.jpg" w="full" />
      </Show>
      <Heading textAlign="center" py="4">
        BABY {"&"} KIDS
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
        Baby and Kids bathing collection makes bathing more enjoyable and
        lovely…
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
        OYA’s Bath products for Baby {"&"} Kids are manufactured with standards,
        in addition to a competitive price to match your country’s market
        requirements and needs.
      </Text>
    </Box>
  );
};

const baby: NextPage = ({ body, seo }: any) => {
  const head = ["Bath", "Bed"];
  return (
    <Box justifyContent="center" alignItems="center" bg="white" color="black">
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
      name: "Bath",
    },
  });
  const body = [data.productCategory.products.nodes];

  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "Bed",
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

export default baby;
