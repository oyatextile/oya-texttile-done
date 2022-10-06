import React from "react";
import {
  Box,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
export interface Product {
  name: string;
  description: string;
  orderProduction: string;
  customizationOptions: string;
  image: string[];
  mainImage: {
    mediaItemUrl: string;
  };
  content: string;
  postSlug: string;
  // images: {
  //   mediaItemUrl: string | null;
  // };
}
const TabsCategory = ({
  head,
  body,
}: {
  head: string[];
  body: any[][];
}): JSX.Element => {
  const unique = (value: any, index: any, self: string | any[]) => {
    return self.indexOf(value) === index;
  };
  head = head.filter(unique);
  return (
    <Box boxSize="full">
      <Tabs
        variant="line"
        px="4"
        pt="4"
        colorScheme={"#299D8C"}
        w="fit-content"
        margin={"auto"}
      >
        <TabList
          justifyContent="center"
          cursor="pointer"
          w="fit-content"
          margin={"auto"}
        >
          {head.map((item, i) => {
            return <Tab key={`${item}-${i}`}>{item}</Tab>;
          })}
        </TabList>
        <TabPanels>
          {body.map((data, i) => {
            return (
              <TabPanel key={i}>
                <SimpleGrid
                  columns={{ md: 3, base: 1 }}
                  spacing={4}
                  justifyContent="center"
                >
                  {data.map((product, i) => {
                    return (
                      <ProductCard
                        key={`product-${i}`}
                        product={product.productfields}
                        content={product.content}
                      />
                    );
                  })}
                </SimpleGrid>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsCategory;
