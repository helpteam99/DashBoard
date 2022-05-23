import { useState } from "react";
import { Affix, Layout } from "antd";
import { Drawer } from "../../Drawer";
import { DashBoardHeader } from "../../Molecules/Headers";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../../Pages/DashBoard/Home";
import { Orders } from "../../../Pages/DashBoard/MaintenanceRequests";
import { AddWorkshop } from "../../../Pages/DashBoard/Addworkshop";
import { Report } from "../../../Pages/DashBoard/Reports";
import { SendFeedback } from "../../../Pages/DashBoard/SendFeedback";
import { WorkshopSupervision } from "../../../Pages/DashBoard/WorkshopSupervision";
import { WorkshopRequests } from "../../../Pages/DashBoard/WorkshopRequests";
import { WorkesAccounts } from "../../../Pages/DashBoard/WorkersAccounts";
import { TasksTable } from "../../../Pages/DashBoard/TasksTable";
import "./styles.css";
const { Header, Content } = Layout;

const DB_Layout = () => {
  const [siderVisalble, setVisability] = useState(() => {
    return localStorage.getItem("siderVisalble") || "true";
  });
  const siderCollaps = () => {
    if (siderVisalble === "true") {
      setVisability("false");
      localStorage.setItem("siderVisalble", "false");
    } else {
      setVisability("true");
      localStorage.setItem("siderVisalble", "true");
    }
  };

  return (
    <Layout className="lagout">
      <Drawer siderCollaps={siderCollaps} siderVisalble={siderVisalble} />

      <Layout>
        <Affix offsetTop={0}>
          <Header
            style={{
              padding: 0,
            }}
          >
            <DashBoardHeader />
          </Header>
        </Affix>
        <Content className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="maintenanceRequests" element={<Orders />} />
            <Route path="addworkshop" element={<AddWorkshop />} />
            <Route path="tasksTable" element={<TasksTable />} />
            <Route path="workersAccounts" element={<WorkesAccounts />} />
            <Route path="reports" element={<Report />} />
            <Route path="sendFeedback" element={<SendFeedback />} />
            <Route
              path="workshopSupervision"
              element={<WorkshopSupervision />}
            />
            <Route path="workshopRequests" element={<WorkshopRequests />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DB_Layout;
