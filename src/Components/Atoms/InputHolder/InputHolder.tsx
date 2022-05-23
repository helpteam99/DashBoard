import { Form } from "antd";
import { inputTypes } from "../../../Constant";
import { InputForm } from "../InputForm";
import InputHolderProps from "./interface";

const InputHolder = ({ type, ...props }: InputHolderProps) => {
  const getElement = () => {
    switch (type) {
      case inputTypes.button: {
        return <InputForm type={"button"} />;
      }
      case inputTypes.checkbox: {
        return <InputForm type={"checkbox"} />;
      }
      case inputTypes.color: {
        return <InputForm type={"color"} />;
      }
      case inputTypes.date: {
        return <InputForm type={"date"} />;
      }
      case inputTypes.email: {
        return <InputForm type={"email"} />;
      }
      case inputTypes.file: {
        return <InputForm type={"file"} />;
      }
      case inputTypes.image: {
        return <InputForm type={"image"} />;
      }
      case inputTypes.month: {
        return <InputForm type={"month"} />;
      }
      case inputTypes.number: {
        return <InputForm type={"number"} />;
      }
      case inputTypes.password: {
        return <InputForm type={"password"} />;
      }
      case inputTypes.radio: {
        return <InputForm type={"radio"} />;
      }
      case inputTypes.url: {
        return <InputForm type={"url"} />;
      }
      case inputTypes.search: {
        return <InputForm type={"search"} />;
      }
      case inputTypes.submit: {
        return <InputForm type={"submit"} />;
      }
      case inputTypes.tel: {
        return <InputForm type={"tel"} />;
      }
      case inputTypes.text: {
        return <InputForm type={"text"} />;
      }
      case inputTypes.time: {
        return <InputForm type={"time"} />;
      }
      default: {
        return <InputForm />;
      }
    }
  };

  return <Form.Item {...props}>{getElement()}</Form.Item>;
};
export default InputHolder;
