import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Carrer: NextPage = ({ seo }: any) => {
  return (
    <Box
      w="full"
      bg="white"
      py={{ base: "12", sm: "4" }}
      display="flex"
      marginTop="auto"
    >
      <Head>
        <title>
          {" "}
          Get a quote for home, hotel and pet products from reputable
        </title>
        <meta
          name="description"
          content="Get a quote for home, hotel and pet products from
        reputable manufacturer. products are manufactured with standards,
        market-matching quality, low MOQ competitive prices from lovely sales
        team."
        />{" "}
      </Head>
      <Stack
        margin={"auto"}
        py="12"
        direction={{ base: "column", lg: "row" }}
        // h='xl'
        w={{ lg: "4xl", base: "full" }}
        justifyContent="center"
        spacing="8"
        border={1}
        boxShadow={{ lg: "2xl", base: "none" }}
        color="black"
      >
        <Box gap="4" pl="8">
          <Heading py="4">Join a fast-growing company</Heading>
          <Box py="12">
            <Text>You’re wanted! If have skills in those fields :</Text>
            <UnorderedList py="4" px="4">
              <ListItem>Marketing / Sales </ListItem>
              <ListItem>Digital Marketing</ListItem>
              <ListItem>Textile enginnering </ListItem>
              <ListItem>Company management </ListItem>
              <ListItem>Production and Industrial </ListItem>
              <ListItem>Textile design</ListItem>
            </UnorderedList>
            <Text>Feel free to send us your Cv : info@oyatextile.com</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          w={{ lg: "md", base: "full" }}
          justifyContent="center"
        >
          <Image w={{ lg: "md", base: "xl" }} h="xl" src="/images/carrer.jpg" />
        </Box>
      </Stack>
      <p dangerouslySetInnerHTML={{ __html: seo?.seoTagsHead }}></p>
    </Box>
  );
};

// export async function getStaticProps() {
//   // var { data } = await client.query({
//   //   query: getSeoForPate,
//   //   variables: {
//   //     name: "/index.php/carrer/",
//   //   },
//   // });
//   // return {
//   //   props: {
//   //     seo: data.page.seo,
//   //   },
//   // };
// }
export default Carrer;
