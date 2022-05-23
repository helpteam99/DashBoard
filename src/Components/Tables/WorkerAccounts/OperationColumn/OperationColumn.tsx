import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, notification, Popconfirm, Space, Tooltip } from "antd";
import axios from "axios";
import Argumants from "../interface";
import "./style.css";
const OperationColumn = (props: Argumants) => {
  const confirm = () => {
    console.log(props.record);
    axios
      .delete("")
      .then((res) => {
        notification.open({
          duration: 3.5,
          placement: "bottomLeft",
          message: "Notification Title",
          description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
          icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
        });
      })
      .catch((error) => {
        console.log(error);
        notification.open({
          duration: 3.5,
          placement: "bottomLeft",
          message: "Notification Title",
          description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
          icon: <CloseCircleTwoTone twoToneColor="red" />,
        });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        verticalAlign: "middle",
      }}
    >
      <Space>
        <Tooltip title={"تفاصيل"}>
          <Button
            size="large"
            shape="circle"
            type={"text"}
            icon={<EllipsisOutlined />}
          />
        </Tooltip>
        <Tooltip title={"تعديل"}>
          <Button
            size="large"
            shape="circle"
            type={"text"}
            icon={<EditOutlined style={{ color: "green" }} />}
          />
        </Tooltip>

        <Popconfirm
          title="Are you sure to delete this task?"
          okText="Yes"
          cancelText="No"
          onConfirm={confirm}
        >
          <Button
            size="large"
            shape="circle"
            icon={<DeleteOutlined style={{ color: "red" }} />}
            type={"text"}
          />
        </Popconfirm>
      </Space>
    </div>
  );
};

export default OperationColumn;
