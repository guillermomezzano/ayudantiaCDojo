import Axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const ListCharacter = () => {
    const [characters, setCharacters] = useState([])

    const searchCharacters = async () => {
        try {
            const response = await Axios.get("http://localhost:8080/personas")
            console.log(response.data)
            setCharacters(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        console.log(id)
        try {
            const response = await Axios.delete(`http://localhost:8080/persona/delete/${id}`)
            searchCharacters()
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(characters)
    }, [characters])

    useEffect(() => {
        searchCharacters()
    }, [])


    return (
        <>
            <h1>lista de personas</h1>
            <ul>
                {characters.map((unCharacters) => (
                    <li key={unCharacters._id}>
                        <Link to={`/character/${unCharacters._id}`}>{unCharacters.nombre}</Link>
                        <button onClick={e => handleDelete(unCharacters._id)}>eliminar</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListCharacter


