import { gql } from "@apollo/client";
import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import DescriptionRendrer from "../../components/DescriptionRendrer";
import ProductSlider from "../../components/ProductSlider";
import client, { findArticle } from "../../lib/apollo-client";
import { parseImages } from "../../lib/parseImage";

const NewPage = ({ article, product }) => {
  const [description, setdescription] = useState("");
  const images = parseImages(product.content);
  useEffect(() => {
    setdescription(
      product.productfields.description
        ?.split("\n")
        .filter((it) => !it.includes("✅"))
    );
  }, []);

  return (
    <Box maxW="100%" __css={{}} position="relative">
      <Head>
        <title>{product.seo_head.title}</title>
        <meta name="keywords" content={product.seo_head.keywords} />
        <meta name="description" content={product.seo_head.seoDescription} />
      </Head>
      <Box maxW={"7xl"} mx="auto">
        <Heading p="4">{product.productfields.name}</Heading>
        <Divider
          orientation="horizontal"
          bg="#3ea394"
          border={".5px"}
          borderColor="#3ea394"
          mb="4"
          ml='4'
          w="40%"
        />
        <Box pos="relative" ml="8">
          {/* <div className="left-bar"></div> */}
          <Stack maxW={"6xl"} spacing={8} mr="4">
            <Image
              alt="cover image"
              src={article.articleFeild.coverImage.mediaItemUrl}
              // maxW={"xl"}
            />
            <Box maxW='600px' >{description}</Box>
            <DescriptionRendrer
              description={article.articleFeild.description}
            />
            <ProductSlider images={images} />
            {article.articleFeild?.slidsheet?.mediaItemUrl && (
              <Image
                alt="slidsheet"
                src={article.articleFeild?.slidsheet?.mediaItemUrl}
              />
            )}

            <Box>
              {article?.articleFeild.catalog?.mediaItemUrl && (
                <Button
                  bg={"#3ea394"}
                  color="white"
                  p="4"
                  border={"1"}
                  _hover={{
                    color: "#3ea394",
                    bg: "white",
                    border: "1px solid",
                  }}
                >
                  <Link
                    display={"flex"}
                    // color="blackAlpha.800"
                    alignItems="center"
                    target={"_blank"}
                    _hover={{
                      textDecor: "none",
                      bg: "transparent",
                    }}
                    href={article?.articleFeild.catalog?.mediaItemUrl}
                  >
                    <Text px="1" fontSize={"md"}>
                      ▶
                    </Text>
                    Download {product?.productfields.name} Catalog
                  </Link>
                </Button>
              )}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export async function getStaticPaths() {
  var { data } = await client.query({
    query: gql`
      query article {
        articles {
          nodes {
            slug
          }
        }
      }
    `,
  });
  const article = data.articles.nodes;

  return {
    paths: article.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: findArticle,
    variables: {
      name: params.slug,
    },
  });

  const article = data.article;
  const product = data.product;
  return {
    props: {
      article,
      product,
    },
  };
}
export default NewPage;
