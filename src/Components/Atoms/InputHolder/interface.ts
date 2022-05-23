import {FormItemProps} from "antd/lib/form/FormItem";
import { inputTypes } from "../../../Constant";




interface InputHolderProps extends FormItemProps{
    type?:inputTypes;
}
export default InputHolderProps