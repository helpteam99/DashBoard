import { Modal } from "antd";
import { useState } from "react";

import AddWorkerForm from "./AddWorkerForm";
import Argument from "./interface";
import "./style.css";

const AddWorker = ({ ...props }: Argument) => {
  const [confirmLoading, setconfirmLoading] = useState(false);

  const handleCancel = () => {
    props.setModalVisible(false);
  };
  const handleOnSave = () => {
    setTimeout(() => {
      props.setModalVisible(false);
      setconfirmLoading(false);
    }, 2000);

    setconfirmLoading(true);
  };

  return (
    <Modal
      title={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <p> اضافة حساب عامل</p>
        </div>
      }
      width={"50%"}
      visible={props.visible}
      onOk={handleOnSave}
      onCancel={handleCancel}
      cancelText={"الغاء"}
      okText={"حفظ"}
      centered={true}
      closable={false}
      confirmLoading={confirmLoading}
      destroyOnClose={true}
    >
      <AddWorkerForm />
    </Modal>
  );
};

export default AddWorker;
