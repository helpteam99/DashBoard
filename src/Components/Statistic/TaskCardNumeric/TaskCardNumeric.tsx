import { Card } from "antd";

import Arguments from "./interface";
import "./styles.css";

const TaskCardNumeric = ({ ...props }: Arguments) => {
  return (
    <Card
      id="TaskCardNumeric"
      className="arabicDirection"
      {...props}
      hoverable={true}
      title={<div id="TaskCardNumericTitle">{props.title}</div>}
      bordered={true}
    >
      <div id="TaskCardNumericBody">
        <div style={props.TaskCounterStyle} id="TaskCounter">
          {props.taskCounter}
        </div>
        <div style={props.counterLableStyle} id="counterLable">
          {props.counterLable}
        </div>
      </div>
    </Card>
  );
};

export default TaskCardNumeric;
