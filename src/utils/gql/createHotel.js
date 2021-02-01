import { gql } from "@apollo/client";

const CREATE_HOTEL = gql`
  mutation CREATEHOTEL(
    $name: String!
    $description: String
    $rooms: Int
    $phone: String
    $website: String
    $amenities: HotelCreateamenitiesInput
    $photos: [AssetWhereUniqueInput!]
  ) {
    createHotel(
      data: {
        name: $name
        description: $description
        amenities: $amenities
        rooms: $rooms
        phone: $phone
        website: $website
        photos: { connect: $photos }
      }
    ) {
      name
      amenities
      photos {
        url
      }
    }
  }
`;
export default CREATE_HOTEL;
