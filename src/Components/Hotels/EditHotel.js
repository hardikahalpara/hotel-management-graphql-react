import React from "react";
import CustomLayout from "../Layout";
import { useMutation, useQuery } from "@apollo/client";
import HotelForm from "./Form";
import { GET_HOTEL_DETAILS, UPDATE_HOTEL } from "../../utils/gql";
import { useParams } from "react-router-dom";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";

function EditHotel() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_HOTEL_DETAILS, {
    variables: { id },
  });
  const [editHotel] = useMutation(UPDATE_HOTEL);

  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const { hotel } = data;
  return (
    <CustomLayout>
      <HotelForm mutation={editHotel} id={id} data={hotel} />
    </CustomLayout>
  );
}

export default EditHotel;
