import { gql } from "@apollo/client";
import client, { getProductBySlug } from "../../../lib/apollo-client";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ProductView from "../../../components/ProductView";
import Head from "next/head";
const Details = ({ children }: any) => {
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
const Article = ({ body ,post}: any) => {
  if (Object.keys(body).length === 0) {
    const description = post.postfield.description.split("\n*");
    console.log("post", description);
    return (
      <Box bg="white" color="black">
        <Head>
          {/* <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p> */}
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
          <Details title="">{post.finalDescription}</Details>
        </Box>
        {/* <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p> */}
      </Box>
    );
  }
  // const page = body?.productPages.nodes[0].name;

  return (
    <Box w="full">
      <Head>
        {/* <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p> */}
      </Head>
      {/* product side */}
      <ProductView product={body.productfields} content={body.content} />
      {/* <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p> */}
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
  if (!body) {
    console.log("runnin here");
    var { data } = await client.query({
      query: gql`
        query getPost($name: ID!) {
          post(id: $name, idType: SLUG) {
            title

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
