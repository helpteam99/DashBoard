import { CardProps } from "antd";
import { CSSProperties } from "react";

interface Argumants extends CardProps{
    taskCounter:number
    counterLable?:string
    TaskCounterStyle?:CSSProperties
    counterLableStyle?:CSSProperties



}
export default  Argumants