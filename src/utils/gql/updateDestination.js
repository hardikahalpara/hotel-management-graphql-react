import { gql } from "@apollo/client";

const UPDATE_DESTINATION = gql`
  mutation UPDATEDESTINATION(
    $id: ID
    $name: String!
    $description: String
    $location: String
  ) {
    updateDestination(
      where: { id: $id }
      data: { name: $name, description: $description, location: $location }
    ) {
      name
      id
      description
      location
    }
  }
`;
export default UPDATE_DESTINATION;
