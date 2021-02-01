import React from "react";
import { Button, Form, Input, message } from "antd";
import { useHistory } from "react-router-dom";
import { DESTINATIONS } from "../../routes";
const { Item } = Form;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

function DestinationForm({ mutation, id, data }) {
  const history = useHistory();
  function handleSubmit(e) {
    const { name, description, location } = e;
    mutation({
      variables: {
        id: id || "",
        name,
        description,
        location: location || "",
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
      initialValues={data}
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

      <Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
}

export default DestinationForm;
