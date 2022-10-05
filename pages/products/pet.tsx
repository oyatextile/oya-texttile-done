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
        <Image src="/images/Banner/3.jpg" w="full" />
      </Show>
      <Heading textAlign="center" py="4">
        PET
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
        Lovely pets has a lovely collection from OYA’s. Our little friends
        deserve more caring…
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
        OYA’s products for Pets are manufactured with standards, in addition to
        a competitive price to match your country’s market requirements and
        needs.
      </Text>
    </Box>
  );
};
const Pet: NextPage = ({ body, seo }: any) => {
  const head = ["Dog Towel", "Dog Bed"];
  return (
    <Box justifyContent="center" alignItems="center" bg="white" color="black">
      <Head>
        {/* <title>Oyahome</title> */}
        <React.Fragment
          // dangerouslySetInnerHTML={{ __html: seo.seoTagsHead }}
        ></React.Fragment>
      </Head>
      <p dangerouslySetInnerHTML={{ __html: seo?.seoBody }}></p>{" "}
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
      name: "Dog Towel",
    },
  });
  const body = [data.productCategory.products.nodes];
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "Dog Bed",
    },
  });
  body.push(data.productCategory.products.nodes);
  var { data } = await client.query({
    query: getSeoForPate,
    variables: {
      name: "/index.php/pet/",
    },
  });
  return {
    props: {
      body: body,
      seo: data.page.seo,
    },
  };
}
export default Pet;
