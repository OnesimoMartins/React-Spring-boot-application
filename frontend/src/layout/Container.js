import styles from "./Container.module.css"


export default function Container(props){
    return(
        
        <div className={styles.container}>
         
          <div className={styles.container_div}> 
            {props.children}
         </div>

         <div>
            {props.Footer}
         </div>
        
        </div>
    )
}