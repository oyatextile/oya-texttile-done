import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import "@fontsource/poppins"; // Defaults to weight 400.
import Fonts from "../components/Font";
import App from "next/app";

// import './article.css'

import Head from "next/head";
import { createContext } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// if (typeof window !== "undefined") {
//   window.history.scrollRestoration = "manual";
// }
export const GlobalContext = createContext({});
const client = new ApolloClient({
  uri: "https://oyatextile.com/cms/?graphql=true",
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Head></Head>
      <MainLayout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
