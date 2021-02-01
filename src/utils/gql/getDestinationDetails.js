import { gql } from "@apollo/client";

const GET_DESTINATION_DETAILS = gql`
  query Destination($id: ID) {
    destination(where: { id: $id }) {
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
export default GET_DESTINATION_DETAILS;
