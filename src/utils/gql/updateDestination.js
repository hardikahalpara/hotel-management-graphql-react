import { gql } from "@apollo/client";

const UPDATE_DESTINATION = gql`
  mutation UPDATEDESTINATION(
    $id: ID
    $name: String!
    $description: String
    $location: String
    $imageId: ID
  ) {
    updateDestination(
      where: { id: $id }
      data: {
        name: $name
        description: $description
        location: $location
        image: { connect: { id: $imageId } }
      }
    ) {
      name
      id
      description
      location
      image {
        url
      }
    }
  }
`;
export default UPDATE_DESTINATION;
