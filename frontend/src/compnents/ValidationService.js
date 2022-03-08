//import { verifyEmail } from "../client"


//const chekIfEmailExists=(email)=>{return verifyEmail(email)}


export function validateName(text){    
 if(!text || text.length<3){
     return'o nome deve ter no mínimo 3 caracteres!'
    }

else if(text.length>10){
        return 'o nome deve ter no máximo 10 caracteres!'
      }

      return 'valid'
}

export function validateSexo(text) {
   return  text==='Género'? false: true
}
 
export function validateEmail(text){
const mailFormat=/^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;
 
if(mailFormat.test(text)){  
    return 'valid'
}    

  else{ 
      return'Este Email não é válido' 
    }

}

