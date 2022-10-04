import { Box, Container } from "@chakra-ui/react";

import React from "react";
import Footer from "../Footer";
import Simple from "../NavBarTest";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container as='main' maxW="full" bg="white" p="0"  pos='relative'>
      {/* <NavBar /> */}
      <Simple />
      <Box w="100%" >{children}</Box>
      <Footer />
    </Container>
  );
};

export default MainLayout;
