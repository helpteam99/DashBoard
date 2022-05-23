import { Card } from "antd";
import Argumants from "./interface";
import { Doughnut } from "react-chartjs-2";
import "./styles.css";
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

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const DoughnutTask = ({ ...props }: Argumants) => {
  return (
    <Card
      className="arabicDirection"
      {...props}
      bodyStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      hoverable={true}
      title={<div className=""> {props.title}</div>}
      bordered={true}
    >
      <div className="DoughnutChart ChartBody">
        <Doughnut data={data} />
      </div>
    </Card>
  );
};

export default DoughnutTask;
