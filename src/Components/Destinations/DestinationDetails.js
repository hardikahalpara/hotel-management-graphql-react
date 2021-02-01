import { useMutation, useQuery } from "@apollo/client";
import { Card, Descriptions, message } from "antd";
import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DELETE_DESTINATION, GET_DESTINATION_DETAILS } from "../../utils/gql";
import { DESTINATIONS } from "../../routes";

function DestinationDetails() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_DESTINATION_DETAILS, {
    variables: { id },
  });
  const history = useHistory();
  const [deleteDestination] = useMutation(DELETE_DESTINATION);
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const { destination } = data;
  console.log(destination);
  return (
    <center>
      <Card
        hoverable
        cover={
          <img
            alt="Destination"
            src={destination.image ? destination.image.url : ""}
          ></img>
        }
        actions={[
          <Link to={`/destinations/${id}/edit`}>
            <EditOutlined key="edit" />
          </Link>,
          <DeleteOutlined
            key="delete"
            onClick={() => {
              deleteDestination({
                variables: {
                  id,
                },
              }).then(() => {
                message.success("Deleted successfully");
                history.push(DESTINATIONS);
              });
            }}
          />,
        ]}
      >
        <Descriptions
          title={destination.name}
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Name">{destination.name}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {destination.description}
          </Descriptions.Item>
          <Descriptions.Item label="Location">
            {destination.location}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </center>
  );
}

export default DestinationDetails;
