import { Box, Container, Stack } from "@chakra-ui/react";
import Nav from "./nav";

const Layout = ({ children}: any) => (
  <Container
    maxW="100%"
    // p="12"
    color='black'
  >
    {children}
  </Container>
);

export default Layout;
