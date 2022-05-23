import { Image } from "antd";
import "./styles.css";
import { logo } from "../../../Assets/Images";
const LoginHeader = () => {
  return (
    <div
      className="header"
      style={{
        direction: "rtl",
      }}
    >
      <div
        style={{
          marginRight: 10,
        }}
      >
        <Image preview={false} src={logo} />
      </div>
    </div>
  );
};

export default LoginHeader;
