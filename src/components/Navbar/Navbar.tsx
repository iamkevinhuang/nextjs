import { Layout, Menu } from "antd";
const { Header } = Layout;

const navbarItems = [
  { key: "/", label: "Homepage" },
  { key: "/about", label: "About" },
  { key: "/contact", label: "Contact" },
  { key: "/posts", label: "Blog" },
];

export default function Navbar() {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo">The Company&apos;s Logo</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        items={navbarItems}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
}
