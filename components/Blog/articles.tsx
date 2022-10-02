import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Card from "./card";

const Articles = ({ articles }:any) => {
  if (!articles) return <></>;
  return (
    <SimpleGrid columns={{ md: 3, base: 1 }}  spacing={4} justifyContent='center'   
    // templateColumns={{ md: "1fr 1fr 1fr ", base: "1fr" }}
    >
      {articles.map((article: { slug: any; }, i: any) => {
        return (
          <Card
            article={article}
            key={`article__left__${article.slug}`}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default Articles;
