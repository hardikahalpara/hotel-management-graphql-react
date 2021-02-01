import React from "react";
import CustomLayout from "../Layout";
import { useMutation } from "@apollo/client";
import DestinationForm from "./Form";
import { CREATE_DESTINATION } from "../../utils/gql";

function CreateDestination() {
  const [createDestination] = useMutation(CREATE_DESTINATION);

  return (
    <CustomLayout>
      <DestinationForm mutation={createDestination} />
    </CustomLayout>
  );
}

export default CreateDestination;
