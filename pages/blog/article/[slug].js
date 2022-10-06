import { gql } from "@apollo/client";
import client, { getProductBySlug } from "../../../lib/apollo-client";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ProductView from "../../../components/ProductView";
import Head from "next/head";
import HTMLRenderer from "react-html-renderer";
const Details = ({ children }) => {
  const data = children?.split("\n", 1)[0];
  var title = "";
  if (data?.includes("*")) {
    title = data;
    title = title.replace("*", "");
    children = children.replace(data, "");
  }
  return (
    <Box>
      <Heading py="4" px="8">
        {title}
      </Heading>
      <Text px="8" pb="4">
        {children}
      </Text>
    </Box>
  );
};
const Article = ({ body, post }) => {
  if (Object.keys(body).length === 0) {
    const description = post.postfield.description.split("\n*");
    return (
      <Box bg="white" color="black">
        <Head>
          <title>{post.seo_head.title}</title>
          <meta name="description" content={post.seo_head.description} />
          <meta name="keywords" content={post.seo_head.keywords} />
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
          {description.map((it, i) => {
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
          <Box>
            <Text px="8" pb="4">
              {post.postfield.finalDescription}
            </Text>
          </Box>
        </Box>
        <Box display={"none"}>
          <HTMLRenderer html={post.seo_body.content} />
        </Box>
      </Box>
    );
  }
  // console.log(body.seo.seoHead);

  return (
    <Box w="full">
      <Head>
        <title>{body.seo_head.title}</title>
        <meta name="keywords" content={body.seo_head.keywords} />
      </Head>
      {/* product side */}
      <ProductView product={body.productfields} content={body.content} />
      <Box display={"none"}>
        <HTMLRenderer html={body.seo_body.content} />
      </Box>
    </Box>
  );
};

export async function getStaticPaths() {
  var { data } = await client.query({
    query: gql`
      query NewQuery {
        category(id: "Buying Guide", idType: NAME) {
          posts {
            nodes {
              slug
            }
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
  const post = data.category.posts.nodes;
  var { data } = await client.query({
    query: gql`
      query NewQuery {
        category(id: "News", idType: NAME) {
          posts {
            nodes {
              slug
            }
          }
        }
      }
    `,
  });
  // ,
  const News = data.category.posts.nodes;
  const dataf = [...products, ...post, ...News];
  return {
    paths: dataf.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  var { data } = await client.query({
    query: getProductBySlug,
    variables: {
      name: params.slug,
    },
  });
  const body = data.product;
  if (!body) {
    console.log("runnin here");
    var { data } = await client.query({
      query: gql`
        query getPost($name: ID!) {
          post(id: $name, idType: SLUG) {
            title
            seo_head {
              title
              keywords
              description
            }
            seo_body {
              content
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            postfield {
              leftImage {
                mediaItemUrl
              }
              rightImage {
                mediaItemUrl
              }
              finalDescription
              description
            }
          }
        }
      `,
      variables: {
        name: params.slug,
      },
    });
    const post = data.post;

    return {
      props: {
        body: {},
        post: data.post,
      },
    };
  }
  return {
    props: { body: body, post: {} },
  };
}

export default Article;
