import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import { useHistory } from "react-router-dom";
import { DESTINATIONS } from "../../routes";
import { GET_ALL_ASSETS } from "../../utils/gql";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
import { useQuery } from "@apollo/client";
const { Item } = Form;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

function DestinationForm({ mutation, id, data: formData }) {
  const { loading, error, data } = useQuery(GET_ALL_ASSETS);
  const history = useHistory();

  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const { assets } = data;

  function handleSubmit(e) {
    const { name, description, location, imageId } = e;
    console.log(imageId);
    mutation({
      variables: {
        id: id || "",
        name,
        description,
        location: location || "",
        imageId: imageId || "",
      },
    })
      .then(() => {
        message.success("Destination created successfully");
        history.push(DESTINATIONS);
      })
      .catch((e) => {
        message.error(e.message);
      });
  }
  return (
    <Form
      {...layout}
      onFinish={handleSubmit}
      initialValues={formData}
      name="create-hotel"
    >
      <Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input hotel name!" }]}
      >
        <Input />
      </Item>
      <Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input hotel description!" }]}
      >
        <Input />
      </Item>
      <Item label="Location" name="location">
        <Input />
      </Item>
      <Item label="Image" name="imageId">
        <Select
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
        >
          {assets.map((asset, index) => {
            return (
              <Select.Option key={index} value={asset.id}>
                {asset.url}
              </Select.Option>
            );
          })}
        </Select>
      </Item>

      <Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
}

export default DestinationForm;
