import React from "react";
import CustomLayout from "../Layout";
import { useMutation } from "@apollo/client";
import CREATE_HOTEL from "../../utils/gql/createHotel";
import HotelForm from "./Form";

function CreateHotel() {
  const [createHotel] = useMutation(CREATE_HOTEL);

  return (
    <CustomLayout>
      <HotelForm mutation={createHotel} />
    </CustomLayout>
  );
}

export default CreateHotel;
