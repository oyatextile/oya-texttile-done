import { Center, Flex, HStack, Link, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./logo";

const leftPaths = [
  {
    path: "/",
    label: "Towels & Bathrobe",
  },
  {
    path: "/",
    label: "Hotel & SPA",
  },
  {
    path: "/",
    label: "Baby",
  },
  {
    path: "/",
    label: "Pets",
  },
  {
    path: "/",
    label: "Fitted Sheet",
  },
  {
    path: "/",
    label: "Beach",
  },
];
const rightPaths = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/",
    label: "About",
  },
  {
    path: "/",
    label: "Blog",
  },
  {
    path: "/",
    label: "Contact",
  },
];
const NavBar = () => {
  return (
    <SimpleGrid columns={3} h='87px' p='6' bg="white" color='blackAlpha.800' alignItems='center' justifyContent='space-between'>
      <Flex gap={4}>
        {leftPaths.map((path) => {
          return (
            <Link key={path.label}>
              <NextLink href={path.path}>{path.label}</NextLink>
            </Link>
          );
        })}
      </Flex>
      <Center>
      <Logo />
      </Center>
      <Flex gap={4} justifySelf='flex-end' alignItems='center'>
        {rightPaths.map((path) => {
          return (
            <Link key={path.label}>
              <NextLink href={path.path}>{path.label}</NextLink>
            </Link>
          );
        })}
        <LanguageSwitcher/>
      </Flex>
    </SimpleGrid>
  );
};

export default NavBar;
