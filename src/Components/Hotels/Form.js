import React from "react";
import { Button, Form, Input, InputNumber, message, Select } from "antd";
import { useHistory } from "react-router-dom";
import { HOTELS } from "../../routes";
import { GET_ALL_ASSETS } from "../../utils/gql";
import { useQuery } from "@apollo/client";
import Loader from "../Common/Loader";
import Page404 from "../Common/Page404";
const { Item } = Form;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
const { Option } = Select;

function HotelForm({ mutation, id, data: formData }) {
  const { loading, error, data } = useQuery(GET_ALL_ASSETS);
  const history = useHistory();

  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const { assets } = data;
  console.log(assets);
  function handleSubmit(e) {
    const { name, description, rooms, phone, website, amenities, photoIds } = e;
    const photos = [];
    if (photoIds) {
      photoIds.forEach((photo) => {
        photos.push({ id: photo });
      });
    }
    mutation({
      variables: {
        id: id || "",
        name,
        description,
        rooms: rooms || 0,
        phone: phone || "",
        website: website || "",
        amenities: { set: amenities || [] },
        photos,
      },
    })
      .then(() => {
        message.success("Hotel created successfully");
        history.push(HOTELS);
      })
      .catch((e) => message.error(e.message));
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
      <Item label="Rooms" name="rooms">
        <InputNumber />
      </Item>
      <Item label="Phone" name="phone">
        <Input />
      </Item>
      <Item label="Website" name="website">
        <Input />
      </Item>
      <Item label="Amenities" name="amenities">
        <Select mode="tags" style={{ width: "100%" }}>
          <Option value="gym">Gym</Option>
        </Select>
      </Item>
      <Item label="Photos" name="photoIds">
        <Select
          mode="multiple"
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

export default HotelForm;
