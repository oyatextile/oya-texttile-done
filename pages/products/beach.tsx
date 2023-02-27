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
      </Head>
      <Show above="md">
        <Image src="/images/Banner/5.jpg" w="full" />
      </Show>
      <Heading textAlign="center" py="4">
        Beach
      </Heading>
      <Text
        textAlign="center"
        px="4"
        fontSize={"14"}
        py="2"
        w="fit-content"
        margin={"auto"}
        maxW="2xl"
      >
        Beach time means joy and happiness so let it be with oya’s beach
        collection.
      </Text>
      <Text
        textAlign="center"
        px="4"
        py="2"
        fontSize={"14"}
        w="fit-content"
        margin={"auto"}
        maxW="4xl"
      >
        OYA&apos;s Beach collections for vacation are manufactured with standards, in
        addition to a competitive price to match your country&apos;s market
        requirements and needs.
        Subscribe to our newsletter 
        <a href="https://www.linkedin.com/newsletters/home-textile-manufacturing-7013520608349024257/">on Linkedin </a> 
        for further information and clients' experiences with us.
      </Text>
    </Box>
  );
};

const Bath: NextPage = ({ body, seo }: any) => {
  const head = ["All"];
  return (
    <Box justifyContent="center" alignItems="center" bg="white" color="black">
      <Head>
        {/* <title>Oyahome</title> */}
        <React.Fragment
        // dangerouslySetInnerHTML={{ __html: seo.seoTagsHead }}
        ></React.Fragment>
      </Head>
      <p dangerouslySetInnerHTML={{ __html: seo?.seoBody }}></p>{" "}
      <Center pb="12">
        <HeadCat />
      </Center>
      <TabsCategory head={head} body={body} />;
    </Box>
  );
};

export async function getStaticProps() {
  var { data } = await client.query({
    query: getAllproductByPage,
    variables: {
      name: "All",
    },
  });
  const body = [data.productCategory.products.nodes];
  // var { data } = await client.query({
  //   query: getSeoForPate,
  //   variables: {
  //     name: "/index.php/beach/",
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
