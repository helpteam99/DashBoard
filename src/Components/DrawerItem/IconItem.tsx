import { Col, Row } from "antd";
import { Arguments } from "./interface";
import { Popover } from "antd";

const IconItem = (props: Arguments) => {
  return (
    <Popover placement="left" title={props.text} trigger="hover">
      <Row
        className={`DrawerItem DrawerIconItem ${
          props.selected ? "IconItemSelected" : ""
        }`}
      >
        <Col
          span={24}
          style={{
            textAlign: "center",
            fontSize: 18,
          }}
        >
          {props.icon}
        </Col>
      </Row>
    </Popover>
  );
};

export default IconItem;
