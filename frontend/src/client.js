import axios from 'axios'
//import { ErrorNotification } from './compnents/Notification'

const url="http://localhost:8080/api/v1/estudante/"

export const getAllStudents=()=>axios.get(url).then(e=>(e.data))

//export const verifyEmail=(email)=>axios.get(url+"/verifyEmail?"+"email="+email).then(e=>e.data)

export const addStudent=student=>axios.post(url,student).then(e=>e.data)

export const deleteStudent=studentId=>axios.delete(url+studentId)

export const updateStudent=(id,student)=>axios.patch(url+id,student)
/*.catch(error=>{
console.log(ErrorNotification (error.response.data,"teste"))
console.log(error.response.status)

})
*/

