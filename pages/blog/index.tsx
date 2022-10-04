import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Text,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Articles from "../../components/Blog/articles";
import client, {
  getllPostsByCat,
  getSeoForPate,
} from "../../lib/apollo-client";

const Blog = ({ posts, categories, seo }: any) => {
  return (
    <Box bg="white" color="black">
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment //@ts-ignore
      <Head>
        <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p>
      </Head>
      <Heading textAlign="center">Oya Home Blog</Heading>
      <Box w="sm" margin="auto" px="4">
        <Text
          flexWrap="nowrap"
          textAlign="center"
          py={{ md: "8", base: "4" }}
          fontSize="sm"
          margin="auto"
        >
          Commodo ut laborum ex laboris aliqua proident sint amet sit laborum
          id. Occaecat irure adipisicing sit aliqua qui irure minim laborum
          officia. Enim adipisicing ipsum exercitation tempor et incididunt
          laboris id aliquip dolore nisi duis. Est nostrud occaecat officia id
        </Text>
      </Box>
      <Tabs variant="unstyled">
        <TabList justifyContent="center" flexWrap={"wrap"}>
          {categories.map(
            (category: string, i: React.Key | null | undefined) => {
              return (
                <Tab
                  key={i}
                  _selected={{ color: "#299D8C" }}
                  fontSize={{ base: "14" }}
                >
                  {category}
                </Tab>
              );
            }
          )}
        </TabList>
        <TabPanels w="4xl" overflow="hidden">
          {posts.map((post: any) => {
            return (
              <TabPanel key={post.id}>
                <Articles articles={post} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
      <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p>
      {/* </Box> */}
    </Box>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  //
  const head = [
    "News",
    "Buying Guide",
    "Bath & Bed",
    "Hotel",
    "Beach",
    "Pet",
    "Baby",
  ];
  var body: any[][] = [];
  var { data } = await client.query({
    query: getllPostsByCat,
    variables: {
      name: "News",
    },
  });
  body.push(data.category.posts.nodes);

  var { data } = await client.query({
    query: getllPostsByCat,
    variables: {
      name: "Buying Guide",
    },
  });
  body.push(data.category.posts.nodes);

  var { data } = await client.query({
    query: getllPostsByCat,
    variables: {
      name: "Bath & Bed",
    },
  });
  body.push(data.category.posts.nodes);

  var { data } = await client.query({
    query: getllPostsByCat,
    variables: {
      name: "Hotel",
    },
  });
  body.push(data.category.posts.nodes);
  var { data } = await client.query({
    query: getllPostsByCat,
    variables: {
      name: "Beach",
    },
  });
  body.push(data.category.posts.nodes);
  var { data } = await client.query({
    query: getllPostsByCat,
    variables: {
      name: "Pet",
    },
  });
  body.push(data.category.posts.nodes);
  var { data } = await client.query({
    query: getllPostsByCat,
    variables: {
      name: "Baby",
    },
  });
  body.push(data.category.posts.nodes);
  var { data } = await client.query({
    query: getSeoForPate,
    variables: {
      name: "/index.php/carrer/",
    },
  });
  return {
    props: {
      posts: body,
      categories: head,
      seo: data.page.seo,
    },
  };
}
export default Blog;
