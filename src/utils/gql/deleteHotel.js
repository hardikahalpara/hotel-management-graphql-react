import { gql } from "@apollo/client";

const DELETE_HOTEL = gql`
  mutation DELETEHOTEL($id: ID) {
    deleteHotel(where: { id: $id }) {
      name
    }
  }
`;
export default DELETE_HOTEL;
