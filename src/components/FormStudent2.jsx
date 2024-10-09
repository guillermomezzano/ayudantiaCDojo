import { useEffect, useState } from "react";

//data
import { optionsFormAge } from './data/optionsForm'

//components
import Layout from "./layout/Layout";

const person = {
    firstName: '',
    lastName: '',
    age: 0,
}

const FormStudent2 = ({ registro, setRegistro }) => {
    const [currentPerson, setCurrentPerson] = useState(person)
    const [error, setError] = useState('')

    const handleOnChange = (e) => {
        console.log(e)
        const { name, value } = e.target
        setCurrentPerson({ ...currentPerson, [name]: value })
        setError('')
    }

    const Validation = () => {
        if (currentPerson.firstName.trim() === '' || currentPerson.firstName.trim() === '' || currentPerson.age === 0) {
            setError('los campos no deben estar vacios')
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!Validation()) return
        setRegistro([...registro, currentPerson])
        setCurrentPerson(person)
    }

    useEffect(() => {
        console.log(registro)
    }, [registro])

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">first name</label>
                <input
                    name="firstName"
                    id="firstName"
                    value={currentPerson.firstName}
                    onChange={handleOnChange}
                />
                <label htmlFor="lastName">last name</label>
                <input
                    name="lastName"
                    id="lastName"
                    value={currentPerson.lastName}
                    onChange={handleOnChange}
                />

                <select onChange={handleOnChange} name='age' >
                    {optionsFormAge.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <button>agregar persona</button>
            </form>
            {error && <p>{error}</p>}
        </Layout>
    )
}


export default FormStudent2


