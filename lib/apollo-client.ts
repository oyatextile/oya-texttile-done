// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://oyatextile.com/cms/?graphql=true",
  cache: new InMemoryCache(),
});

export const getAllproductByPage = gql`
query productpage ($name:ID!){
  productCategory(id: $name, idType: NAME)
  {
    products{
      nodes{
        content
        productfields{
          name
          description
					customizationOptions
          orderProduction
          postSlug
          mainImage{
            mediaItemUrl
          }
          
        }
      }
    }
  }
  
}
`;

export const getAllproduct = gql`
query productpage ($name:ID!){
  productPage(id: $name, idType: NAME)
  {
    products{
      nodes{
        content
        productfields{
          name
          description
					customizationOptions
          orderProduction
          postSlug
          mainImage{
            mediaItemUrl
          }
          
        }
      }
    }
  }
  
}
`;
export const getSeoForPate = gql`
query about($name: ID!) {
  page(id: $name, idType: URI) {
    seo {
      seoBody
      seoHead
    }
  }
}`;

// seo {
//   seoBody
//   seoTagsHead
// }
export const getProductBySlug = gql`
query productpage($name: ID!) {
  product(id: $name, idType: SLUG) {
    content
    productPages{
    	nodes{
        name
      }
    }
    seo_head{
      title
      keywords
      description
    }
    seo_body {
      content
    }
    productfields {
      videoSrc
      videoTitle
      catalog{
        mediaItemUrl
      }
      name
      description
      customizationOptions
      orderProduction
      postSlug
      mainImage {
        mediaItemUrl
      }
    }
  }
}`;
export const getllPostsByCat = gql`
query productpage($name: ID!) {
  category(id: $name, idType: NAME) {
    posts {
      nodes {
        id
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        slug
        categories {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
}
`;

export default client;
