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
      <Head>
        <title>
          {" "}
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
        <Image src="/images/Banner/4.jpg" w="full" />
      </Show>
      <Heading textAlign="center" py="4">
        HOTEL
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
        Hotel’s clients need a great stay experience. OYA’s hotel collection is
        a suitable choice for each hotel.
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
        OYA’s Hotel collection for all hotel categories are manufactured with
        standards, in addition to a competitive price to match your country’s
        market requirements and needs.
      </Text>
    </Box>
  );
};

const Hotel: NextPage = ({ body, seo }: any) => {
  const head = ["Hospital", "Bath", "Bed Linen", "Protectors"];
  return (
    <Box justifyContent="center" alignItems="center" bg="white" color="black">
      <Center pb="6">
        <HeadCat />
      </Center>
      <TabsCategory head={head} body={body} />;
    </Box>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "Hospital",
    },
  });
  const body = [data.productCategory.products.nodes];
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "BathHotel",
    },
  });
  body.push(data.productCategory.products.nodes);
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "Bed Linen",
    },
  });
  body.push(data.productCategory.products.nodes);
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "Protectors",
    },
  });
  body.push(data.productCategory.products.nodes);
  // var { data } = await client.query({
  //   query: getSeoForPate,
  //   variables: {
  //     name: "/index.php/hotel/",
  //   },
  // });
  return {
    props: {
      body: body,
      // seo: data.page.seo,
    },
  };
}
export default Hotel;
