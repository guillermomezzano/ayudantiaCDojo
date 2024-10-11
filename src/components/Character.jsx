import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { useState, useEffect } from 'react'


const Character = () => {
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate()

    const [character, setCharacter] = useState({})

    const searchOneCharacter = async () => {
        try {
            const response = await Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            console.log(response.data)
            setCharacter(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        console.log(character)
    }, [character])


    useEffect(() => {
        searchOneCharacter()
    }, [])


    const handleOnClick = () => {
        navigate(`/list`)
    }


    return (
        <div>
            <h1>Character</h1>
            <img src={character.image} />
            <h2>{character.name}</h2>
            <button onClick={handleOnClick}>volver</button>
        </div>
    )

}
export default Character