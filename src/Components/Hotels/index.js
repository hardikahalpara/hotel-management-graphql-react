import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_HOTELS } from "../../utils/gql/";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
import CustomLayout from "../Layout";
import { Row, Col, Card, Typography, Button, Affix } from "antd";
const { Meta } = Card;

function Hotels() {
  const [page, setPage] = React.useState(0);
  const count = 10;
  const { loading, error, data } = useQuery(GET_ALL_HOTELS, {
    variables: { skip: page, first: count },
  });
  const { Paragraph } = Typography;

  if (loading) return <Loader />;
  if (error) return <Page404 />;
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
                    src={photos && photos.length ? photos[0].url : ""}
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
      <Button
        disabled={page - count < 0}
        onClick={() => {
          setPage(page - count);
        }}
      >
        Prev
      </Button>
      <Button
        disabled={hotels.length < count}
        onClick={() => {
          setPage(page + count);
        }}
      >
        Next
      </Button>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Affix offsetBottom={10}>
          <Button type="primary">Affix bottom</Button>
        </Affix>
      </div>
    </CustomLayout>
  );
}

export default Hotels;
