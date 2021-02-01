import { useQuery } from "@apollo/client";
import { Card, Carousel, Descriptions, Tag } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import GET_HOTEL_DETAILS from "../../utils/gql/getHotelDetails";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
import { EditOutlined } from "@ant-design/icons";

function HotelDetails() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_HOTEL_DETAILS, {
    variables: { id },
  });
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const { hotel } = data;
  console.log(hotel);
  return (
    <center>
      <Card
        hoverable
        cover={
          <Carousel>
            {hotel.photos.map((photo, index) => {
              return <img alt="Hotel photos" src={photo.url} key={index}></img>;
            })}
          </Carousel>
        }
        actions={[
          <Link to={`/hotels/${id}/edit`}>
            <EditOutlined key="edit" />
          </Link>,
        ]}
      >
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        <Descriptions
          title={hotel.name}
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Name">{hotel.name}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {hotel.description}
          </Descriptions.Item>
          <Descriptions.Item label="Rooms">{hotel.rooms}</Descriptions.Item>
          <Descriptions.Item label="Phone">{hotel.phone}</Descriptions.Item>
          <Descriptions.Item label="Website">{hotel.website}</Descriptions.Item>
          <Descriptions.Item label="Amenities">
            {hotel.amenities && hotel.amenities.length
              ? hotel.amenities.map((amenity, index) => {
                  return <Tag key={index}>{amenity}</Tag>;
                })
              : null}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </center>
  );
}

export default HotelDetails;
