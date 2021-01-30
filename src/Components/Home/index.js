import { useQuery } from "@apollo/client";
import React from "react";
import { GET_LAST_HOTELS } from "../../utils/gql/";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
import CustomLayout from "../Layout";
import { Row, Col, Card, Typography } from "antd";
const { Meta } = Card;
function Home() {
  const { loading, error, data } = useQuery(GET_LAST_HOTELS);
  const { Paragraph } = Typography;
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  console.log(data);
  const { hotels } = data;
  return (
    <CustomLayout>
      <Row gutter={[24, 24]}>
        {hotels.map((hotel, index) => {
          const { name, description, photos } = hotel;
          return (
            <Col key={index} className="gutter-row" sm={12} md={8} lg={6}>
              <Card
                style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
                cover={
                  <img
                    style={{ height: 200 }}
                    alt="example"
                    src={photos ? photos[0].url : ""}
                  />
                }
              >
                <Meta
                  title={name}
                  description={<Paragraph ellipsis>{description}</Paragraph>}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </CustomLayout>
  );
}

export default Home;
