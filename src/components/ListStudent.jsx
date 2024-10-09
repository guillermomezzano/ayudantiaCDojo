const ListStudent = ({ registro, handleDelete }) => {
    console.log(registro)

    return (
        <>
            <h1>lista de estudiantes</h1>
            {
                registro.length === 0 ?
                    <p>ho hay estudiantes</p>
                    :
                    <ul>
                        {registro.map((unRegistro, index) => (
                            <li key={index}>
                                {unRegistro.firstName}  {unRegistro.lastName} - edad: {unRegistro.age}
                                <button onClick={() => handleDelete(index)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
            }
        </>
    )
}

export default ListStudent