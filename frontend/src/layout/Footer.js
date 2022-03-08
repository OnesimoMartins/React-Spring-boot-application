import { Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'


export default function Footer(props){

    return(

        <footer style={{//clear:'both',height:'70px',position:'relative',
         background:"#cbdce3",paddingTop:'1em',marginTop:'auto'}}>
           
            <Avatar
             style={{backgroundColor:'#38b1e7',marginRight:'1.5em'}}
             size='default'>
                 {props.numberOfStudents}
            </Avatar>
           
            <Button 
            style={{background:'#338eb7', marginBottom:'18px',borderColor:'#338eb7' }}
            onClick={props.handleOpenAddStudent}
            type='primary'>
                Adicionar novo Estudante +
            </Button>
       
        </footer>
    )
}