import { gql } from "@apollo/client";

const GET_LAST_HOTELS = gql`
  {
    hotels(last: 10, orderBy: createdAt_DESC) {
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
export default GET_LAST_HOTELS;
