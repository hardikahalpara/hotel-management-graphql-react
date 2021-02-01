import { useQuery } from "@apollo/client";
import { Card, Carousel, Descriptions, Tag } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
import { EditOutlined } from "@ant-design/icons";
import { GET_DESTINATION_DETAILS } from "../../utils/gql";

function DestinationDetails() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_DESTINATION_DETAILS, {
    variables: { id },
  });
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
            alt="Destination photo"
            src={destination.image ? destination.image.url : ""}
          ></img>
        }
        actions={[
          <Link to={`/destinations/${id}/edit`}>
            <EditOutlined key="edit" />
          </Link>,
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
