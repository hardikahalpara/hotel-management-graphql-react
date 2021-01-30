import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";

const { Header, Content } = Layout;

function CustomLayout({ children }) {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Layout>
        <Layout>
          <Content
            style={{
              padding: 24,
              minHeight: "100vh",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default CustomLayout;
