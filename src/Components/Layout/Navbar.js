import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/hotels">Hotels</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/destination">Destination</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;