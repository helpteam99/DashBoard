import {Form as AntdForm} from "antd";

import React from "react";
import FormProps from "./interface";

const Form = ({...props}: FormProps) => {
    return (
        <AntdForm {...props} >
            <>
                {props.children}
            </>
        </AntdForm>
    );

}
export default Form