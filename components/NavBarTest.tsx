import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Collapse,
  Hide,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
// import LanguageSwitcher from "./LanguageSwitcher";
import { leftPaths, rightPaths } from "../data/navdata";
const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    cursor="pointer"
    px={{ xl: 2, base: "1" }}
    py={1}
    _hover={{
      textDecoration: "underline",
      color: "green.300",
    }}
    fontSize={{ xl: "14", base: "sm" }}
  >
    <NextLink href={href}>{children}</NextLink>
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg="white"
      color="blackAlpha.700"
      // position={'relative'}
      px={4}
      m="0"
      pos={"sticky"}
      boxShadow="sm"
      top="0"
      w="full"
      zIndex={"10"}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent="space-between"
        position="relative"
        flexWrap="wrap"
        align="center"
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", lg: "flex" }}>
            {leftPaths.map((link) => (
              <NavLink key={link.label} href={link.path}>
                {link.label}
              </NavLink>
              // </button>
            ))}
          </HStack>
        </HStack>
        <Link
          color="black"
          w="fit-content"
          // position={"absolute"}
          // zIndex='100'
          marginRight={"auto"}
          // left={"50%"}
          // right={'50%'}
          marginLeft="auto"
         
          // translateX={"-50%"}
        >
          <NextLink href="/">
            <Image
              w="64"
              src="http://oyatextile.com/cms/wp-content/uploads/2022/10/3.png"
            />
          </NextLink>
        </Link>{" "}
        <Flex
          alignItems={"center"}
          display={{ base: "none", lg: "flex" }}
          gap={3}
        >
          {rightPaths.map((link) => (
            <NavLink key={link.label} href={link.path}>
              {link.label}
            </NavLink>
          ))}
          {/* <LanguageSwitcher /> */}
        </Flex>
        <Hide above="lg">{/* <LanguageSwitcher /> */}</Hide>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {leftPaths.map((link) => (
              <Link
                key={link.path}
                onClick={() => {
                  onClose();
                }}
              >
                <NavLink href={link.path}>{link.label}</NavLink>
              </Link>
            ))}
            {rightPaths.map((link) => (
              <Link
                key={link.label}
                onClick={() => {
                  onClose();
                }}
              >
                <NavLink href={link.path}>{link.label}</NavLink>
              </Link>
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
