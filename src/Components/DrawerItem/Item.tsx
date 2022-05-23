import { Col, Popover, Row } from "antd";
import { Arguments } from "./interface";
import "./style.css";

const Item = (props: Arguments) => {
  return (
    <Row className={`DrawerItem ${props.selected ? "itemSelected" : ""}`}>
      <Col
        style={{
          textAlign: "center",

          alignItems: "center",
        }}
        span={20}
      >
        {props.text}
      </Col>
      <Col
        span={4}
        style={{
          textAlign: "center",
          fontSize: 18,
        }}
      >
        {props.icon}
      </Col>
    </Row>
  );
};

export default Item;
