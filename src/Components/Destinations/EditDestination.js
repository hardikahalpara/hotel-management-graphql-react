import React from "react";
import CustomLayout from "../Layout";
import { useMutation, useQuery } from "@apollo/client";
import { GET_DESTINATION_DETAILS, UPDATE_DESTINATION } from "../../utils/gql";
import { useParams } from "react-router-dom";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
import DestinationForm from "./Form";

function EditDestination() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DESTINATION_DETAILS, {
    variables: { id },
  });
  const [editDestination] = useMutation(UPDATE_DESTINATION);

  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const { destination } = data;
  return (
    <CustomLayout>
      <DestinationForm id={id} mutation={editDestination} data={destination} />
    </CustomLayout>
  );
}

export default EditDestination;
