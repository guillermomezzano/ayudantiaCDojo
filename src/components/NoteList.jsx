import { useEffect } from "react"

const NoteList = ({ notesFilter, setNotes }) => {
    console.log(notesFilter)

    const handleDelete = (index) => {
        const updateRegistro = notesFilter.filter((_, i) => i !== index)
        setNotes(updateRegistro)
        console.log(updateRegistro)
    }

    useEffect(() => {
        console.log(notesFilter)
    }, [notesFilter])

    return (
        <>
            <h1>lista de estudiantes</h1>

            <ul>
                {notesFilter.map((unNotes, index) => (
                    <li key={index}>
                        {unNotes.text}  {unNotes.priority}
                        <button onClick={() => handleDelete(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default NoteList