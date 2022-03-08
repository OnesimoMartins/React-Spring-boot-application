import Modal from 'antd/lib/modal/Modal';
import { Button, Input, Select, Tag, Form } from 'antd'
import { useState } from "react";
import styles from './ModalStudentForm.module.css'
import { validateEmail, validateName, validateSexo } from './ValidationService'
import { addStudent, updateStudent } from '../client';
import { ErrorNotification } from './Notification';

export default function ModalStudentForm({ onCancel, isVisible, onSuccess, studentForUpdate, isCreatingNew }) {

    const [student, setStudent] = useState(studentForUpdate || {})
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [errors, setErrors] = useState(

        studentForUpdate ?
            {
                isPrimeiro_nomeValid: 'valid',
                isUltimo_nomeValid: 'valid',
                isEmailValid: 'valid',
                isSexoValid: true
            }
            :
            {
                isPrimeiro_nomeValid: '',
                isUltimo_nomeValid: '',
                isEmailValid: '',
                isSexoValid: false
            })



    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmiting(true)

        isCreatingNew ?

            addStudent(student).then(res => {
                onSuccess("Estudante criado com sucesso!")
            })
                .catch(
                    err => {
                        ErrorNotification(err.response.data, "Insira um outro email")
                        setErrors({ ...errors, isEmailValid: err.response.data })
                    })
                .finally(
                    setIsSubmiting(false)
                )

            :

            updateStudent(student.id, student).then(
                res => {
                   onSuccess("Estudante actualizado com sucesso!")
                })
                .catch(
                    err => {
                        ErrorNotification(err.response.data, "Insira um outro email")
                        setErrors({ ...errors, isEmailValid: err.response.data })
                    })
                .finally(
                    setIsSubmiting(false)
                )

    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        switch (name) {
            case 'primeiro_nome':
                setStudent({ ...student, primeiro_nome: value })
                setErrors({ ...errors, isPrimeiro_nomeValid: validateName(value) })

                break;

            case 'ultimo_nome':
                setStudent({ ...student, ultimo_nome: value })
                setErrors({ ...errors, isUltimo_nomeValid: validateName(value) })
                console.log(errors)
                break;

            case 'email':
                setStudent({ ...student, email: value })
                setErrors({ ...errors, isEmailValid: validateEmail(value) })
                break;

            default:
                break;
        }

    }


    return (

        <Modal
            title={studentForUpdate ? 'Actualizar Estudante' : 'Adicionar Estudante'}
            visible={isVisible}
            closable={false}

            /*destroyOnClose={true}
            fazer o formulario ficar vazio apos submeter
            */

            footer={[
                <Button
                    onClick={onCancel}>
                    cancelar
                </Button>

                , <Button form='studentForm'
                    htmlType='submit'
                    type='primary'
                    onClick={handleSubmit}
                    disabled={!(
                        errors.isPrimeiro_nomeValid === 'valid'
                        && errors.isUltimo_nomeValid === 'valid'
                        && errors.isEmailValid === 'valid'
                        && errors.isSexoValid) || isSubmiting}>

                    {studentForUpdate ? 'Actualizar' : 'Adicionar +'}
                </Button>
            ]}>


            <Form id='studentForm'>


                <Input type='text'
                    name="primeiro_nome"
                    placeholder="Digite o primeiro nome"
                    value={student.primeiro_nome}
                    onChange={e => handleChange(e)}
                />
                {(errors.isPrimeiro_nomeValid && errors.isPrimeiro_nomeValid.length !== 5) &&
                    <Tag style={{ color: 'white', backgroundColor: '#38b1e7' }}>
                        {errors.isPrimeiro_nomeValid}</Tag>
                }

                <Input type='text'
                    name='ultimo_nome'
                    value={student.ultimo_nome}
                    onChange={e => handleChange(e)}
                    style={{ marginTop: '1em' }}
                    placeholder="Digite o último nome"
                // value={studentForUpdate.ultimo_nome}
                />

                {// APRESNTA A LABEL DE ERRO CASO HAJA ALGUM
                    (errors.isUltimo_nomeValid && errors.isUltimo_nomeValid !== 'valid') &&
                    <Tag style={{ color: 'white', backgroundColor: '#38b1e7' }}>
                        {errors.isUltimo_nomeValid}</Tag>
                }

                <Input type='text'
                    name="email"
                    value={student.email}
                    onChange={e => { handleChange(e) }}
                    style={{ marginTop: '1em' }}
                    placeholder="Digite o Email" />

                {(errors.isEmailValid && errors.isEmailValid !== 'valid') &&
                    <Tag style={{ color: 'white', backgroundColor: '#38b1e7' }}>
                        {errors.isEmailValid}</Tag>
                }
                <br />
                <Select
                    value={student.sexo}
                    placeholder="Género"
                    style={{
                        width: 130,
                        marginTop: '1em',
                        marginBottom: '1.5em',
                        textAlign: "center"
                    }}
                    onChange={e => {
                        setStudent({ ...student, sexo: e })
                        setErrors({ ...errors, isSexoValid: validateSexo(e) })
                    }}>
                    {['MASCULINO', 'FEMININO'].map((item) => <Select.Option key={item} value={item} />)}

                </Select>

                {!errors.isSexoValid &&
                    <label className={styles.warningLabel}> A seleção do género é obrigatório </label>
                }

                <br />
            </Form>

        </Modal>

    )
}