import {
  ContactsOutlined,
  ContainerOutlined,
  DashboardOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Image, Row, Space } from "antd";
import { DrawerProps } from "antd";
import { IconItem, Item } from "../DrawerItem";
import { logo } from "../../Assets/Images";
import { Link, useLocation } from "react-router-dom";

interface Arguments extends DrawerProps {
  siderVisalble: string;
  siderCollaps: () => any;
}

const H_Drawer = (props: Arguments) => {
  const currentPath = useLocation().pathname;

  return props.siderVisalble === "true" ? (
    <Drawer
      closable={false}
      visible={props.siderVisalble == "true" ? true : false}
      mask={false}
      width={200}
      bodyStyle={{
        padding: 0,
        // backgroundColor: drowerColor,
      }}
    >
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Row
          style={{
            padding: 2,
            marginBottom: 10,
            marginTop: 20,
          }}
        >
          <Col span={8}>
            <Button
              onClick={props.siderCollaps}
              size="small"
              type="text"
              icon={<MenuUnfoldOutlined />}
            />
          </Col>

          <Col span={16}>
            <Image width={120} preview={false} src={logo} />
          </Col>
        </Row>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/"
        >
          <Item
            selected={currentPath === "/" ? true : false}
            icon={<DashboardOutlined />}
            text={"الصفحة الرئيسية"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/maintenanceRequests"
        >
          <Item
            selected={currentPath === "/maintenanceRequests" ? true : false}
            icon={<HomeOutlined />}
            text={"طلبات الصيانة"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/addworkshop"
        >
          <Item
            selected={currentPath === "/addworkshop" ? true : false}
            icon={<UsergroupAddOutlined />}
            text={"اضافة ورشة"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/tasksTable"
        >
          <Item
            selected={currentPath === "/tasksTable" ? true : false}
            icon={<ScheduleOutlined />}
            text={"جدول المهام"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/workersAccounts"
        >
          <Item
            selected={currentPath === "/workersAccounts" ? true : false}
            icon={<ContactsOutlined />}
            text={"حسابات العمال"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/reports"
        >
          <Item
            selected={currentPath === "/reports" ? true : false}
            icon={<ContainerOutlined />}
            text={"تقارير"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/sendFeedback"
        >
          <Item
            selected={currentPath === "/sendFeedback" ? true : false}
            icon={<DashboardOutlined />}
            text={"ارسال ملاحظات"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/workshopSupervision"
        >
          <Item
            selected={currentPath === "/workshopSupervision" ? true : false}
            icon={<DashboardOutlined />}
            text={"مراقبة الورشات"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/workshopRequests"
        >
          <Item
            selected={currentPath === "/workshopRequests" ? true : false}
            icon={<DashboardOutlined />}
            text={"طلبات ورشة الصيانة"}
          />
        </Link>
      </Space>
    </Drawer>
  ) : (
    <Drawer
      // bodyStyle={{
      //   backgroundColor: drowerColor,
      // }}
      title={
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Button
            onClick={props.siderCollaps}
            type="text"
            icon={<MenuFoldOutlined />}
          />
        </div>
      }
      closable={false}
      visible={props.siderVisalble == "true" ? false : true}
      mask={false}
      width={75}
    >
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/"
        >
          <IconItem
            selected={currentPath === "/" ? true : false}
            icon={<DashboardOutlined />}
            text={"الصفحة الرئيسية"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/maintenanceRequests"
        >
          <IconItem
            selected={currentPath === "/maintenanceRequests" ? true : false}
            icon={<HomeOutlined />}
            text={"طلبات الصيانة"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/addworkshop"
        >
          <IconItem
            selected={currentPath === "/addworkshop" ? true : false}
            icon={<UsergroupAddOutlined />}
            text={"اضافة ورشة"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/tasksTable"
        >
          <IconItem
            selected={currentPath === "/tasksTable" ? true : false}
            icon={<ScheduleOutlined />}
            text={"جدول المهام"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/workersAccounts"
        >
          <IconItem
            selected={currentPath === "/workersAccounts" ? true : false}
            icon={<ContactsOutlined />}
            text={"حسابات العمال"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/reports"
        >
          <IconItem
            selected={currentPath === "/reports" ? true : false}
            icon={<ContainerOutlined />}
            text={"تقارير"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/sendFeedback"
        >
          <IconItem
            selected={currentPath === "/sendFeedback" ? true : false}
            icon={<DashboardOutlined />}
            text={"ارسال ملاحظات"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/workshopSupervision"
        >
          <IconItem
            selected={currentPath === "/workshopSupervision" ? true : false}
            icon={<DashboardOutlined />}
            text={"مراقبة الورشات"}
          />
        </Link>
        <Link
          replace
          style={{
            color: "black",
          }}
          to="/workshopRequests"
        >
          <IconItem
            selected={currentPath === "/workshopRequests" ? true : false}
            icon={<DashboardOutlined />}
            text={"طلبات ورشة الصيانة"}
          />
        </Link>
      </Space>
    </Drawer>
  );
};

export default H_Drawer;
