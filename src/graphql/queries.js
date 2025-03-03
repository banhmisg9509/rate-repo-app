import { gql } from "@apollo/client";

export const GET_RESPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id
          fullName
          description
          ownerAvatarUrl
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
