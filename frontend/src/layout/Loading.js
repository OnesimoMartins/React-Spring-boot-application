import { Spin} from "antd";
import Icon from '@ant-design/icons'
import styles from "./Loading.module.css"
//import Icon from "antd"

export default function Loading() {
    const icon=()=><Icon  type="loading" style={{fontSize:35}} ></Icon>
    return(

        <div >
        <Spin size="large"
         tip="Aguarde enquanto buscamos os estudantes para você..."
         className={styles.Loading} 
         indicator={icon} 
         type="square"/>
        
        </div>
    )
}