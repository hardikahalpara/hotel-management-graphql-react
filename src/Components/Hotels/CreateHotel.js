import { Button, Form, Input, InputNumber, message, Select } from "antd";
import React from "react";
import CustomLayout from "../Layout";
import { useMutation } from "@apollo/client";
import CREATE_HOTEL from "../../utils/gql/createHotel";
import { useHistory } from "react-router-dom";
import { HOTELS } from "../../routes";

const { Item } = Form;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
const { Option } = Select;

function CreateHotel() {
  const [createHotel] = useMutation(CREATE_HOTEL);
  const history = useHistory();
  function handleSubmit(e) {
    const { name, description, rooms, phone, website, amenities } = e;
    createHotel({
      variables: {
        name,
        description,
        rooms: rooms || 0,
        phone: phone || "",
        website: website || "",
        amenities: { set: amenities || [] },
      },
    })
      .then(() => {
        message.success("Hotel created successfully");
        history.push(HOTELS);
      })
      .catch((e) => message.error(e.message));
    console.log(e);
  }
  return (
    <CustomLayout>
      <Form {...layout} onFinish={handleSubmit} name="create-hotel">
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
          rules={[
            { required: true, message: "Please input hotel description!" },
          ]}
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

        <Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </CustomLayout>
  );
}

export default CreateHotel;
