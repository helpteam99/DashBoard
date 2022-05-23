import { Card, Space } from "antd";
import React from "react";
import { inputTypes } from "../../../Constant";
import { InputHolder } from "../../Atoms";
import { Form } from "../../Molecules/Form";
import "./style.css";

const AddWorkerForm = () => {
  return (
    <div className="addworkerformContainer">
      <Form className="addworkerform">
        <Card
          id="personalInfo"
          title={<p className="inputGroupTitle">المعلومات الشخصية</p>}
        >
          <Space className="itemLayout" direction="vertical" size={"large"}>
            <InputHolder type={inputTypes.text} />
            <InputHolder type={inputTypes.tel} />
            <InputHolder />
            <InputHolder />
            <InputHolder />
            <InputHolder />
          </Space>
        </Card>
        <Card
          id="accountInfo"
          title={<p className="inputGroupTitle">معلومات الحساب</p>}
        >
          <Space className="itemLayout" direction="vertical" size={"large"}>
            <InputHolder />
            <InputHolder />
            <InputHolder />
          </Space>
        </Card>
        <Card
          id="locationInfo"
          title={<h3 className="inputGroupTitle">السكن</h3>}
        >
          <Space className="itemLayout" direction="vertical" size={"large"}>
            <InputHolder />
            <InputHolder />
            <InputHolder />
          </Space>
        </Card>
      </Form>
    </div>
  );
};

export default AddWorkerForm;
