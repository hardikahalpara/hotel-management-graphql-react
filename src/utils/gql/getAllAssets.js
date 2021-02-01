import { gql } from "@apollo/client";

const GET_ALL_ASSETS = gql`
  {
    assets {
      url
      id
    }
  }
`;
export default GET_ALL_ASSETS;
