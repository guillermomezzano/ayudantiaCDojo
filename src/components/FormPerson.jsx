import { useState, useEffect, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Row, Col } from "reactstrap";
import { GlobalContex } from "./context/global-contex";
import Axios from "axios"
//schemas
// import { formSchema } from './schema/schemaFoms'

//components
import Layout from "./layout/Layout";

//data
import { optionsSkill } from './data/optionsForm'

const FormPerson = () => {
    const { currentUser } = useContext(GlobalContex)
    const [skill, setSkill] = useState([])
    // console.log(setUser)
    // console.log(user)

    const handleSubmit = async (values, { resetForm }) => {
        console.log(values)
        const payload = {
            ...values,
            skill
        }
        console.log("payload", payload)
        try {
            const response = await Axios.post('http://localhost:8080/personas/add', payload)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        resetForm();
        setSkill([])
    }

    const handleOnChange = (event) => {
        const selectId = event.target.value
        const selectedSkill = optionsSkill.find(option => option.value.id_reference === selectId)
        setSkill([selectedSkill.value])
    }


    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])

    return (
        <Layout>
            <h1>formulario de registro</h1>
            <Formik
                initialValues={{
                    nombre: "",
                    apellido: "",
                    nacionalidad: "",
                    email: ""
                }}
                // validationSchema={formSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup>
                        <label htmlFor='nombre'>nombre: </label>
                        <Field
                            className='form-control'
                            name='nombre'
                            placeholder=''
                            type='text'
                        />
                        <ErrorMessage
                            name='nombre'
                            component='div'
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor='apellido'>apellido: </label>
                        <Field
                            className='form-control'
                            name='apellido'
                            placeholder=''
                            type='text'
                        />
                        <ErrorMessage
                            name='apellido'
                            component='div'
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor='nacionalidad'>nacionalidad: </label>
                        <Field
                            className='form-control'
                            name='nacionalidad'
                            type='text'
                        />
                        <ErrorMessage
                            name='nacionalidad'
                            component='div'
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor='email'>email: </label>
                        <Field
                            className='form-control'
                            name='email'
                            type='text'
                        />
                        <ErrorMessage
                            name='email'
                            component='div'
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor='skill'>skill: </label>
                        <select
                            name="skill"
                            onChange={handleOnChange}
                        >
                            <option disabled value={0} >skill</option>
                            {optionsSkill.map((option, index) => (
                                <option key={index} value={option.value.id_reference}>{option.label}</option>
                            ))}

                        </select>
                    </FormGroup>
                    <Row>
                        <Col lg={12} md={12}>
                            <Button
                                color='primary'
                                className='mr-1 mb-1 btn-block'
                                type='submit'
                            >
                                Guardar
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Formik>
        </Layout>
    )
}

export default FormPerson;




