import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_DESTINATIONS } from "../../utils/gql/";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
import CustomLayout from "../Layout";
import { Row, Col, Card, Typography, Button, Affix } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CREATEDESTINATION } from "../../routes";
const { Meta } = Card;

function Destinations() {
  const [page, setPage] = React.useState(0);
  const count = 10;
  const { loading, error, data } = useQuery(GET_ALL_DESTINATIONS, {
    variables: { skip: page, first: count },
  });
  const { Paragraph } = Typography;

  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const { destinations } = data;
  console.log(destinations);
  return (
    <CustomLayout>
      <Row gutter={[24, 24]}>
        {destinations.map((destination, index) => {
          const { name, description, image } = destination;
          return (
            <Col key={index} className="gutter-row" sm={12} md={8} lg={6}>
              <Link to={`/destinations/${destination.id}`}>
                <Card
                  style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
                  cover={
                    <img
                      style={{ height: 200 }}
                      alt="example"
                      src={image ? image.url : ""}
                    />
                  }
                >
                  <Meta
                    title={name}
                    description={<Paragraph ellipsis>{description}</Paragraph>}
                  />
                </Card>
              </Link>
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
        disabled={destinations.length < count}
        onClick={() => {
          setPage(page + count);
        }}
      >
        Next
      </Button>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Affix offsetBottom={30}>
          <Link to={CREATEDESTINATION}>
            <Button
              size="large"
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
            />
          </Link>
          {/* <Button type="primary">Affix bottom</Button> */}
        </Affix>
      </div>
    </CustomLayout>
  );
}

export default Destinations;
