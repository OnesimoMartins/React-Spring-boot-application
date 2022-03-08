import { notification } from "antd";

 const createNotification=(type,message,description)=> {
    
        notification[type](
            {
             message:message,
             description:description
            }
        )
    
}

export const ErrorNotification=(message,desc)=>createNotification('error',message,desc)
export const SuccsessNotification=(message)=>createNotification('success',message,"")
