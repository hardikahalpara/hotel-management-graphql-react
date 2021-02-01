import { gql } from "@apollo/client";

const CREATE_DESTINATION = gql`
  mutation CREATEDESTINATION(
    $name: String!
    $description: String
    $location: String
  ) {
    createDestination(
      data: { name: $name, description: $description, location: $location }
    ) {
      name
      location
      id
      description
    }
  }
`;
export default CREATE_DESTINATION;
