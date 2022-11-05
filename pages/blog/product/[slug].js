import { gql } from "@apollo/client";
import client, { findArticle, getProductBySlug } from "../../../lib/apollo-client";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ProductPage from "../../../components/ProductPage";
import ProductImagePreview from '../../../components/ProductImagePreview'
import Head from "next/head";
import HTMLRenderer from "react-html-renderer";

const Article = ({ article ,product}) => {
  return (
    <Box w="full" px='8'>
      <Head>
        <title>{product.seo_head.title}</title>
        <meta name="keywords" content={product.seo_head.keywords} />
        <meta name="description" content={product.seo_head.seoDescription} />
      </Head>
      <Stack
        
        direction={{base:'column',lg:'row'}}
        display={'flex'} justifyContent='center' spacing={'8'} w='full' h={{base:'unset',lg:'4xl'}}>
      <ProductImagePreview content={product.content}/>
      <ProductPage product={product.productfields} content={product.content} article={article}/>
      </Stack>
      <Box display={"none"}>
        <HTMLRenderer html={product.seo_body.content} />
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
    query:findArticle,
    variables: {
      name: params.slug,
    },
  });

  const article = data.article;
  const product = data.product;
  return {
    props: {
      article,
      product
    },
  };
}

export default Article;
