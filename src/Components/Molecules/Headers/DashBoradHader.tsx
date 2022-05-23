import {
  BellOutlined,
  CaretDownOutlined,
  MailOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Col, Row, Space } from "antd";

import { Input } from "antd";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./styles.css";
const { Search } = Input;
interface Arguments {}

const DashBoradHader = (props: Arguments) => {
  const [selected, setSelected] = useState("SY");
  return (
    <Row className="header">
      <Col
        style={{
          marginLeft: 20,
        }}
        span={8}
      >
        <Space size={"middle"}>
          <span>
            <span>
              <CaretDownOutlined />
            </span>
            <Badge count={0}>
              <Avatar size={"large"} icon={<UserOutlined />} />
            </Badge>
          </span>
          <div style={{ marginLeft: 0, marginTop: 10 }}>
            <div className="userName headerLable">Diaa Salah</div>
            <div className="userPosition headerLable">Manager</div>
          </div>
          <span
            onClick={() => {
              alert("dsad");
            }}
          >
            <Badge size="small" count={1}>
              <Avatar size={"small"} icon={<BellOutlined />} />
            </Badge>
          </span>
          <span>
            <Badge size="small" count={1}>
              <Avatar size={"small"} icon={<MailOutlined />} />
            </Badge>
          </span>
          <span className="FlagsSelectContainer">
            <ReactFlagsSelect
              className="FlagsSelect"
              countries={["US", "SY"]}
              optionsSize={16}
              selectedSize={16}
              showSelectedLabel={false}
              showSecondaryOptionLabel={false}
              showOptionLabel={false}
              showSecondarySelectedLabel={false}
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
          </span>
        </Space>
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
        }}
        span={4}
      >
        <Input
          suffix={<SearchOutlined />}
          className="headerSearch"
          placeholder="input here"
        />
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};

export default DashBoradHader;
