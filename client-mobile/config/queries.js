import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      price
      Category {
        name
      }
      mainImg
    }
  }
`;

export const GET_PRDUCT_DETAILS = gql`
  query Product($productId: ID!) {
    product(id: $productId) {
      id
      name
      price
      mainImg
      description
      authorId
      Images {
        id
        productId
        imgUrl
      }
      Category {
        id
        name
      }
      author {
        _id
        username
      }
    }
  }
`;
