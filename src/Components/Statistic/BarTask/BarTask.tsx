import { Card } from "antd";
import Argumants from "./interface";
import { Bar } from "react-chartjs-2";
// import faker from "faker";
import "./style.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
const BarTask = ({ ...props }: Argumants) => {
  return (
    <Card
      id="BarTask"
      {...props}
      hoverable={true}
      title={<div className="arabicDirection">{props.title}</div>}
      bordered={true}
    >
      <div>{/* <Bar options={options} data={data} /> */}</div>
    </Card>
  );
};

export default BarTask;
