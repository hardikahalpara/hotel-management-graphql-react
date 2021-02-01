import { gql } from "@apollo/client";

const GET_ALL_DESTINATIONS = gql`
  query Destinations($skip: Int!, $first: Int!) {
    destinations(orderBy: createdAt_DESC, skip: $skip, first: $first) {
      id
      name
      description
      location
      image {
        url
      }
    }
  }
`;
export default GET_ALL_DESTINATIONS;
