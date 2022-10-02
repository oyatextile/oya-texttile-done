import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { gql } from "@apollo/client";
import client from "../../../lib/apollo-client";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";
const Article = ({ article }: any) => {
  return (
    <Box bg="black" color="white">
      <Stack
        bgImage={article.featuredImage?.node.mediaItemUrl}
        w="full"
        h="md"
        __css={{
          backgroundSize: "cover",
        }}
        justifyContent="center"
        alignContent="center"
      >
        <Heading color="white" textAlign="center">
          {article.title}
        </Heading>
      </Stack>

      <Box w="full" display="flex">
        <Box p="4" margin={"auto"}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {article.content}
          </ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        posts(first: 1000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });
  return {
    paths: data.posts.edges.map((article: { node: { slug: any } }) => ({
      params: {
        slug: article.node.slug,
      },
    })),
    fallback: false,
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: Array<string | {params: {[key: string]: string } }>,
//     fallback: boolean
//   }
// }
export async function getStaticProps({ params }: any) {
  const { data } = await client.query({
    query: gql`
      query NewQuery($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          content
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  // console.log(data);
  return {
    props: { article: data.post },
    revalidate: 1,
  };
}

export default Article;
