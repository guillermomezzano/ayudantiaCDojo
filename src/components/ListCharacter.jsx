import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const ListCharacter = () => {
    const [characters, setCharacters] = useState([])
    const navigate = useNavigate();

    const searchCharacters = async () => {
        try {
            const response = await Axios.get("https://rickandmortyapi.com/api/character")
            console.log(response.data.results)
            setCharacters(response.data.results)
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

    const handleOnClick = (id) => {
        console.log(id)
        navigate(`/character/${id}`)
    }


    return (
        <>
            <h1>lista de personajes</h1>
            <ul>
                {characters.map((unCharacters) => (
                    <li key={unCharacters.id}>
                        <img src={unCharacters.image} />
                        <p>{unCharacters.name}</p>
                        <button onClick={() => handleOnClick(unCharacters.id)}>ver personaje</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListCharacter


