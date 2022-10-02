import { Box, Center, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import TabsCategory from "../../components/TabsCategory";

import { gql } from "@apollo/client";
import client, { getAllproductByPage } from "../../lib/apollo-client";
const HeadCat = () => {
  return (
    <Box justifyContent="center" w="md" alignItems="center">
      <Heading textAlign="center"> Baby {"&"} kids </Heading>
      <Text textAlign="center" px='4'>
        The perfect bathroom, which is exactly what you want with every detail,
        is completely shaped by your design and imagination
      </Text>
    </Box>
  );
};

const baby: NextPage = ({ body }: any) => {
  const head = ["Bath", "Bed"];
  return (
    <Box justifyContent="center" alignItems="center" bg="white" color="black">
      <Center py="12">
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
  return {
    props: {
      body: body,
    },
  };
}

export default baby;
