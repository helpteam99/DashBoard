import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Space,
  Button,
  Tooltip,
  Avatar,
} from "antd";
import "./style.css";
import { ColumnsType } from "antd/lib/table";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  FormOutlined,
  UserOutlined,
} from "@ant-design/icons";
import OperationColumn from "./OperationColumn";
interface Item {
  key: string;
  employeeName: string;
  userName: string;
  password: string;
  phoneNumber: number;
}

const dataSoures: Item[] = [];

const WorkerAccounts = () => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, updateLoading] = useState(true);

  useEffect(() => {
    const originData: Item[] = [];
    for (let i = 0; i < 100; i++) {
      originData.push({
        key: i.toString(),
        employeeName: `Edrward ${i}`,
        userName: "Diaa",
        password: "32dsadasda",
        phoneNumber: 15,
      });
    }
    setData(originData);
    console.log("useEffect");
  }, []);

  setTimeout(() => {
    updateLoading(false);
  }, 2000);

  const columns: ColumnsType<Item> = [
    {
      title: <div className="tableTitle">العمليات</div>,
      dataIndex: "",
      width: "20%",
      align: "center",
      render: (record) => {
        return <OperationColumn record={record} />;
      },
    },
    {
      title: "رقم الهاتف",
      dataIndex: "phoneNumber",
      align: "center",
      width: "20%",
    },
    {
      title: "كلمة المرور",
      dataIndex: "password",
      align: "center",
      width: "20%",
    },
    {
      title: "اسم الحساب",
      dataIndex: "userName",
      align: "center",
      width: "20%",
    },

    {
      title: "اسم العامل",
      dataIndex: "employeeName",
      align: "center",
      width: "25%",
      render: (title) => {
        return (
          <div>
            <Space size={"large"}>
              <span>{title}</span>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      className="table"
      loading={isLoading}
      bordered
      dataSource={data}
      columns={columns}
      sticky={{
        offsetHeader: 62,
      }}
    />
  );
};

export default () => <WorkerAccounts />;
