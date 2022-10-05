import { gql } from "@apollo/client";
import client, { getProductBySlug } from "../../../lib/apollo-client";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ProductView from "../../../components/ProductView";
import Head from "next/head";
const Details = ({ children }: any) => {
  const data = children.split("\n", 1);
  var title = "";
  if (data[0].includes("*")) {
    title = data[0];
    title = title.replace("*", "");
    children = children.replace(data[0], "");
  }
  return (
    <Box>
      <Heading py="4" px="8">
        {title}
      </Heading>
      <Text px="8">{children}</Text>
    </Box>
  );
};
const Article = ({ body, post, seo }: any) => {
  if (Object.keys(body).length === 0) {
    const description = post.postfield.description.split("\n*");

    return (
      <Box bg="white" color="black">
        <Head>
          <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p>
        </Head>
        <Box maxW={"4xl"} margin="auto" boxShadow={"2xl"} mb="4">
          <Image
            src={post.featuredImage.node.mediaItemUrl}
            w="full"
            maxH={"xl"}
            maxW={"4xl"}
            margin="auto"
          />
          <Box>
            <Heading
              textAlign={"center"}
              bg="#299D8C"
              py="4"
              color="white"
              px="4"
            >
              {post.title}
            </Heading>
          </Box>
          {description.map((it: string, i: any) => {
            return <Details key={i}>{it}</Details>;
          })}

          <Stack
            maxW={"4xl"}
            direction={{ md: "row", base: "column" }}
            w="fit-content"
            margin={"auto"}
            py="4"
          >
            <Image src={post.featuredImage.node.mediaItemUrl} w="sm" />
            <Image src={post.featuredImage.node.mediaItemUrl} w="sm" />
          </Stack>
          <Details title="">
            There are several important factors to affect the hotel towel’s
            softness, appearance, feel, longevity, colorfastness, and
            performance. How to choose the right towels for hotels, healthcare,
            and spa facilities or What to look for in hotel towels when sourcing
            the towels for industrial usage? Don’t worry! Oya’s Technical Team
            created a clear towel buying guide for you. This guide helps you
            both buying hotel towels from your wholesaler supplies or make a
            customized fresh production in a manufacturing company such as Oya
            Textile in Turkey. Here are the tips that you have to check
            carefully!
          </Details>
        </Box>
        <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p>
      </Box>
    );
  }
  return (
    <Box w="full">
      <Head>
        <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p>
      </Head>
      {/* product side */}
      <ProductView product={body.productfields} content={body.content} />
      <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p>
    </Box>
  );
};

export async function getStaticPaths() {
  var { data } = await client.query({
    query: gql`
      query NewQuery {
        posts(first: 1000) {
          nodes {
            slug
          }
        }
        products(first: 1000) {
          nodes {
            slug
          }
        }
      }
    `,
  });
  const products = data.products.nodes;
  const dataf = [...products, ...data.posts.nodes];
  return {
    paths: dataf.map((article: { [x: string]: any; node: { slug: any } }) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  var { data } = await client.query({
    query: getProductBySlug,
    variables: {
      name: params.slug,
    },
  });
  const body = data.product;
  // const seo_s = data.seo;

  // if (!body) {
  //   var { data } = await client.query({
  //     query: gql`
  //       query productpage($name: ID!) {
  //         post(id: $name, idType: SLUG) {
  //           title
  //           seo {
  //             seoBody
  //             seoTagsHead
  //           }
  //           featuredImage {
  //             node {
  //               mediaItemUrl
  //             }
  //           }
  //           postfield {
  //             leftImage {
  //               mediaItemUrl
  //             }
  //             rightImage {
  //               mediaItemUrl
  //             }
  //             finalDescription
  //             description
  //           }
  //         }
  //       }
  //     `,
  //     variables: {
  //       name: params.slug,
  //     },
  //   });
  //   return {
  //     props: {
  //       body: {},
  //       seo: data.seo,
  //       post: data.post,
  //     },
  //   };
  // }
  return {
    props: { body: body, post: {} },
  };
}

export default Article;
