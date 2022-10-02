import React from "react";
import NextLink from "next/link";
import { Badge, Box, Image, Link, Text } from "@chakra-ui/react";

const Card = ({ article }: any) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <NextLink href={`/blog/article/${article.slug}`}>
        <Link>
          <Box w="fit-content">
            <Image
              width="md"
              height="200px"
              src={article.featuredImage?.node.mediaItemUrl}
            />
            {article.categories.edges.map((it: any,i:any) => {
              return (
                <Badge
                  key={i}
                  variant="subtle"
                  colorScheme="green"
                  fontWeight="bold"
                  bg="white"
                  color="green.600"
                  px="4"
                >
                  {it.node.name}
                </Badge>
              );
            })}

            <Text fontSize="lg" px="4">
              {article.title}
            </Text>
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
};

export default Card;
