import {
  Box,
  Button,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { parseImages } from "../lib/parseImage";
import DescriptionRendrer from "./DescriptionRendrer";

function ProductPage({
  product,
  content,
  article,
}: {
  product: any;
  content: string | null;
  article: any;
}) {
  const images = parseImages(content);
  return (
    <Box
      mt='8'
      maxW={'4xl'}
      mx={{base:'auto',lg:'unset'}}
      bg="white"
      boxShadow={'sm'}
      __css={{
        borderTop:'none',
        borderBottom:'none'
      }}
      color="black"
      w="full"
      gap="4"
      overflowY='scroll'
    >
        <Heading
          textAlign="start"
          px="8"
          as="h1"
          py="4"
          fontSize={{ base: "xl", lg: "4xl" }}
          pt="5"
          color="blackAlpha.800"
          alignSelf="self-start"
          letterSpacing={3}
        >
          {product?.name}
        </Heading>
        <hr />

        <Box
          alignSelf="self-start"
          justifySelf="flex-end"
          marginTop="auto"
          px="6"
        >
          <Box
            as="iframe"
            width="100%"
            maxW={"4xl"}
            maxH="md"
            height={"md"}
            src={`${article?.articleFeild.video}?rel=0&autoplay=1`}
            // title={article?.videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            py="4"
          ></Box>
          <DescriptionRendrer  description={article.articleFeild.description}/>
        </Box>
    </Box>
  );
}

export default ProductPage;
