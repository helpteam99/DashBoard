import { UserAddOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { WorkerAccountsTable } from "../../../Components/Tables/WorkerAccounts";
import { useState } from "react";
import "./styles.css";
import AddWorder from "../../../Components/Modals/AddWorder";

const WorkesAccounts = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <div className="container">
      <div
        style={{
          direction: "rtl",
          marginBottom: 5,
        }}
      >
        <Button
          onClick={showModal}
          icon={
            <UserAddOutlined
              style={{
                fontSize: 24,
              }}
            />
          }
          type="primary"
        >
          <span className="addBtn"> اضافة حساب</span>
        </Button>
        <AddWorder setModalVisible={setModalVisible} visible={isModalVisible} />
      </div>
      <WorkerAccountsTable />
    </div>
  );
};

export default WorkesAccounts;
