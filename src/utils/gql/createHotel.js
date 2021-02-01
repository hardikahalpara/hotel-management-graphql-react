import { gql } from "@apollo/client";

const CREATE_HOTEL = gql`
  mutation CREATEHOTEL(
    $name: String!
    $description: String
    $rooms: Int
    $phone: String
    $website: String
    $amenities: HotelCreateamenitiesInput
  ) {
    createHotel(
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
      amenities
    }
  }
`;
export default CREATE_HOTEL;
