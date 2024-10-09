import { useState, useEffect, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Row, Col } from "reactstrap";
import { GlobalContex } from "./context/global-contex";

//schemas
import { formSchema } from './schema/schemaFoms'

//components
import Layout from "./layout/Layout";

//data
import { optionsFormAge } from './data/optionsForm'

const FormStudent = () => {
    const [resgistro, setRegistro] = useState([])
    const { currentUser } = useContext(GlobalContex)
    // console.log(setUser)
    // console.log(user)

    const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        setRegistro([...resgistro, values])
        currentUser.setUser(values)
        resetForm();

    }

    // useEffect(() => {
    //     console.log(resgistro)
    // }, [resgistro])


    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])


    return (
        <Layout>
            <h1>formulario de registro</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    age: 0,
                    password: "",
                    rePassword: ""
                }}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup>
                        <label htmlFor='firstName'>First Name: </label>
                        <Field
                            className='form-control'
                            name='firstName'
                            placeholder=''
                            type='text'
                        />
                        <ErrorMessage
                            name='firstName'
                            component='div'
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor='lastName'>Last Name: </label>
                        <Field
                            className='form-control'
                            name='lastName'
                            placeholder=''
                            type='text'
                        />
                        <ErrorMessage
                            name='lastName'
                            component='div'
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor='password'>password: </label>
                        <Field
                            className='form-control'
                            name='password'
                            type='password'
                        />
                        <ErrorMessage
                            name='password'
                            component='div'
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor='firstName'>repetir password: </label>
                        <Field
                            className='form-control'
                            name='rePassword'
                            type='password'
                        />
                        <ErrorMessage
                            name='rePassword'
                            component='div'
                            className='field-error text-danger'
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor='age'>Age: </label>
                        <Field
                            as="select"
                            name="age"
                            className='form-control'
                        >
                            <option disabled value={0}>Select Age</option>
                            {optionsFormAge.map((option, index) => (
                                <option key={index} value={option.value}>{option.label}</option>
                            ))}

                        </Field>
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

export default FormStudent;




