import './App.css';
import { Button, Empty, Table } from 'antd'
import { deleteStudent, getAllStudents } from './client';
import react from 'react';
import Container from './layout/Container';
import Avatar from 'antd/lib/avatar/avatar';
import Footer from './layout/Footer';
import ModalStudentForm from './compnents/ModalStudentForm';
import Loading from './layout/Loading';
import { ErrorNotification, SuccsessNotification } from './compnents/Notification';



class App extends react.Component {

  state = {
    students: [],
     isLoading:false,
     timePassed:false,
     isModalAddStudentVisible: false,
    studentForUpdate: {},
    modalUpdateStudent:undefined
  }

  openModalAddStudent = () => {
    this.setState({ isModalAddStudentVisible: true })
  }
 

  closeModalAddStudent = () => {
    this.setState({ isModalAddStudentVisible: false })
  }
  closeModalUpdateStudent = () => {
    this.setState({ isModalUpdateStudentVisible:false })
  }

  fetchStudents = () => {
    this.setState({ isLoading: true })
    getAllStudents()
      .then(res => {
        this.setState({ students: res, isLoading: false })
      })
  }

  componentDidMount() {
    this.fetchStudents();
  }


  updateComponent = () => {
    getAllStudents()
      .then(res => {
        this.componentDidMount()
        //tenho que rever essa porcaria
      })
  }

  modalUpdateStudent(student){
    
    return<ModalStudentForm
      isVisible={true}
      onCancel={()=>{
        this.setState({ modalUpdateStudent:undefined})
      }}
      studentForUpdate={student}
      onSuccess={(message) => {
        this.updateComponent()
        this.setState({ modalUpdateStudent:undefined})
        SuccsessNotification(message)
      }} />
  }

  render() {

    if(this.state.isLoading){
      setTimeout(()=>this.setState({timePassed:true}),4000)
      return !this.state.timePassed?
       <Container><Loading/></Container>
       :<Container><Empty description="Verifique a sua conexão com a internet"/></Container>
       
       
    }

    let students = this.state.students

    const globalFooter = <Footer handleOpenAddStudent={this.openModalAddStudent}
      numberOfStudents={students.length} />

    let globalModalStudent =
      <ModalStudentForm
       isCreatingNew={true}
        isVisible={this.state.isModalAddStudentVisible}
        onCancel={this.closeModalAddStudent}
        onSuccess={(message) => {
          this.updateComponent()
          this.closeModalAddStudent() 
          SuccsessNotification(message)
        }}
      />

    let columns = [
      {
        title: '',
        key: "avatar",
        render: (text, student) => (

          <Avatar shape='square' size="large">
            {student.primeiro_nome.charAt(0).toUpperCase() + student.ultimo_nome.charAt(0).toUpperCase()}
          </Avatar>
        )

      },

      {
        title: 'Número de estudante',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Primeiro Nome',
        dataIndex: 'primeiro_nome',
        key: "primeiro_nome"
      },
      {
        title: "Último Nome",
        dataIndex: "ultimo_nome",
        key: "ultimo_nome"
      },
      {
        title: "Email",
        dataIndex: "email"
        , key: "email"
      },
      {
        title: 'Género',
        dataIndex: "sexo",
        key: 'sexo'
      },
      {
        title: 'Ação',
        key: 'acao',
        render: (text, student) => (
          <div style={{ display:"flex"}}>

            <Button
              onClick={() => {this.setState({modalUpdateStudent:   this.modalUpdateStudent(student)})}}
              style={{ marginRight: "10px" }}>
             Editar
             </Button>

            <Button style={{ color: "red" }/*BUTTON TO DELETE */}
              onClick={
                () => { 
                   deleteStudent(student.id)
                  this.updateComponent()
                  SuccsessNotification("Estudante eliminado com sucesso!")
                }
              }>
              Eliminar
            </Button>
          </div>
        )

      }

    ]
   

    return (


    <div className="App">

        {students.length ?

          <Container Footer={globalFooter}>

            <Table
              dataSource={this.state.students}
              columns={columns}
              pagination={false}
              rowKey='id' />
    

            {globalModalStudent}
            {this.state.modalUpdateStudent}
          </Container>

          : 
          
          <Container
            Footer={globalFooter}>
            {globalModalStudent}
            
            <Empty
             description={<p>Nenhum Estudante encontrado</p>}
             />
          
          </Container>
        }

      </div>

    );
  }


}
export default App;
