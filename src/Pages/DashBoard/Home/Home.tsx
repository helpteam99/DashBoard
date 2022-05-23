import "./styles.css";
import { useState } from "react";
import { Col, Row } from "antd";
import BarTask from "../../../Components/Statistic/BarTask";
import TaskCardNumeric from "../../../Components/Statistic/TaskCardNumeric";
import DoughnutTask from "../../../Components/Statistic/DoughnutTask";

function Home() {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);

  return (
    <div className="container">
      <div className="CardContainer">
        <Row gutter={16}>
          <Col span={8}>
            <TaskCardNumeric
              counterLable="عدد المهام"
              taskCounter={240}
              title={"المهام المنجزة"}
              TaskCounterStyle={{
                color: "green",
              }}
              loading={loading}
            />
          </Col>
          <Col span={8}>
            <TaskCardNumeric
              counterLable="عدد المهام"
              taskCounter={60}
              title={"المهام غير المنجزة"}
              loading={loading}
              TaskCounterStyle={{
                color: "red",
              }}
            />
          </Col>
          <Col span={8}>
            <TaskCardNumeric
              counterLable="عدد المهام"
              taskCounter={400}
              TaskCounterStyle={{
                color: "orange",
              }}
              title={"المهام الكلية"}
              loading={loading}
            />
          </Col>
        </Row>
      </div>

      <div className="ChartContainer">
        <Row gutter={16}>
          <Col span={12}>
            <BarTask title={"المهام الغير منجزة"} loading={loading} />
          </Col>
          <Col span={12}>
            <DoughnutTask title={"المهام المنجزة"} loading={loading} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
