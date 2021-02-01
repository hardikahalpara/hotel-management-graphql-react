import { gql } from "@apollo/client";

const DELETE_DESTINATION = gql`
  mutation DELETEDESTINATION($id: ID) {
    deleteDestination(where: { id: $id }) {
      name
    }
  }
`;
export default DELETE_DESTINATION;
