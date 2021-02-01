import { gql } from "@apollo/client";

const GET_HOTEL_DETAILS = gql`
  query Hotels($id: ID) {
    hotel(where: { id: $id }) {
      id
      name
      description
      website
      createdAt
      phone
      rooms
      amenities
      photos {
        url
      }
    }
  }
`;
export default GET_HOTEL_DETAILS;
