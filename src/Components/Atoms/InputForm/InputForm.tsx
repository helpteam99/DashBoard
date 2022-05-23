import InputFormProps from "./interface";
import { Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const InputForm = ({ ...props }: InputFormProps) => {
  return <Input {...props} />;
};
export default InputForm;
