import { gql } from "@apollo/client";

const GET_ALL_HOTELS = gql`
  query Hotels($skip: Int!, $first: Int!) {
    hotels(orderBy: createdAt_DESC, skip: $skip, first: $first) {
      id
      name
      description
      website
      createdAt
      phone
      photos {
        url
      }
    }
  }
`;
export default GET_ALL_HOTELS;
