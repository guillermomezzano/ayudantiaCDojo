import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { useState, useEffect } from 'react'

//components
import Layout from "./layout/Layout";

//data
import { optionsSkill } from './data/optionsForm'

const Character = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [skill, setSkill] = useState({})
    const [character, setCharacter] = useState({})
    const [isEditing, setIsEditing] = useState(true)

    const handleOnChange = (e) => {
        console.log(e)
        const { name, value } = e.target
        setCharacter({ ...character, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            nombre: character.nombre,
            apellido: character.apellido,
            nacionalidad: character.nacionalidad,
            email: character.email,
        }
        try {
            const response = await Axios.patch(`http://localhost:8080/update/persona/${id}`, payload)
            setIsEditing(true)
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    const searchOneCharacter = async () => {
        try {
            const response = await Axios.get(`http://localhost:8080/persona/${id}`)
            console.log(response.data)
            setCharacter(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddkill = async () => {
        if (!skill) return
        try {
            const response = await Axios.patch(`http://localhost:8080/persona/add/skill/${id}`, skill)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnChangeSkill = (event) => {
        const selectId = event.target.value
        const selectedSkill = optionsSkill.find(option => option.value.id_reference === selectId)
        setSkill(selectedSkill.value)
    }


    useEffect(() => {
        console.log(skill)
    }, [skill])


    useEffect(() => {
        searchOneCharacter()
    }, [])


    const handleOnClick = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    const handleVolver = () => {
        navigate('/')
    }


    return (

        <Layout>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">nombre</label>
                <input
                    name="nombre"
                    id="nombre"
                    value={character.nombre || ''}
                    onChange={handleOnChange}
                    disabled={isEditing}
                />
                <label htmlFor="apellido">apellido</label>
                <input
                    name="apellido"
                    id="apellido"
                    value={character.apellido || ''}
                    onChange={handleOnChange}
                    disabled={isEditing}
                />
                <label htmlFor="nacionalidad">nacionalidad</label>
                <input
                    name="nacionalidad"
                    id="nacionalidad"
                    value={character.nacionalidad || ''}
                    onChange={handleOnChange}
                    disabled={isEditing}
                />
                <label htmlFor="email">email</label>
                <input
                    name="email"
                    id="email"
                    value={character.email || ''}
                    onChange={handleOnChange}
                    disabled={isEditing}
                />


                {isEditing ?
                    (
                        <button type='button' onClick={handleOnClick}>editar</button>
                    ) : (
                        <button type='submit'> guardar cambios</button>
                    )}

            </form>
            <label htmlFor='skill'>skill: </label>
            <ul>
                {character.skill?.map((unCharacters, index) => (
                    <li key={index}>
                        {unCharacters.nombre}
                    </li>
                ))}
            </ul>
            <select
                name="skill"
                onChange={handleOnChangeSkill}
            >
                <option disabled value={0} >skill</option>
                {optionsSkill.map((option, index) => (
                    <option key={index} value={option.value.id_reference}>{option.label}</option>
                ))}

            </select>
            <button onClick={handleAddkill}>agregar skill</button>
            <button onClick={handleVolver}>volver</button>
        </Layout>

    )

}
export default Character