import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import ProductView from "../../components/ProductView";
import client, {
  getProductBySlug,
} from "../../lib/apollo-client";

function Test({ body }: { body: any }) {
  console.log(body);
  return (
    <Box w='full'>
      {/* product side */}
      <ProductView product={body.productfields} content={body.content} />
    </Box>
  );
}
export async function getStaticProps() {
  // Run API calls in parallel
  var { data } = await client.query({
    query: getProductBySlug,
    variables: {
      name: "Avorteks",
    },
  });
  const body = data.product;
  return {
    props: {
      body: body,
    },
  };
}

export default Test;
