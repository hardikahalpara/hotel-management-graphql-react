import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { DESTINATIONS, HOME, HOTELS } from "../../routes";

function Navbar() {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link to={HOME}>Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={HOTELS}>Hotels</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={DESTINATIONS}>Destination</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
