import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import "./globals.css";
import { Menu } from "antd";
import Link from "next/link";

// элементы меню
const items = [
  { key: "home", label: <Link href={"/"}>Home</Link> },
  { key: "animals", label: <Link href={"/animals"}>Animals</Link> },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content style={{ padding: "0 48px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Animal Shelter 2025 Created by Kirill Rubkin
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
