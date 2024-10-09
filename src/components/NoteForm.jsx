import { useState, useEffect } from "react"

const initialValues = {
    text: '',
    priority: 'Baja'
}


const NoteForm = ({ notes, setNotes }) => {

    // {
    //     text: '',
    //         priority: 'ALta'
    // }

    const [note, setNote] = useState(initialValues)

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setNote({ ...note, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNotes([...notes, note])
        setNote(initialValues)
    }

    useEffect(() => {
        console.log(note)
    }, [note])

    useEffect(() => {
        console.log(notes)
    }, [notes])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">nota</label>
            <input
                name="text"
                id="text"
                value={note.text}
                onChange={handleOnChange}
            />
            <select onChange={handleOnChange} name='priority' >
                <option value='Baja'>Baja</option>
                <option value='Media'>Media</option>
                <option value='Alta'>Alta</option>
            </select>
            <button>agregar nota</button>
        </form>
    )


}

export default NoteForm;