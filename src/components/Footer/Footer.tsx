import { Layout } from "antd";
const { Footer: AntDFooter } = Layout;

export default function Footer() {
  return (
    <AntDFooter
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </AntDFooter>
  );
}
