import { gql } from "@apollo/client";

const UPDATE_HOTEL = gql`
  mutation UPDATEHOTEL(
    $id: ID
    $name: String!
    $description: String
    $rooms: Int
    $phone: String
    $website: String
    $amenities: HotelUpdateamenitiesInput
  ) {
    updateHotel(
      where: { id: $id }
      data: {
        name: $name
        description: $description
        amenities: $amenities
        rooms: $rooms
        phone: $phone
        website: $website
      }
    ) {
      name
      id
    }
  }
`;
export default UPDATE_HOTEL;
