const TableStudent = ({ registro, handleDelete }) => {
    return (
        <div>
            <h1>tabla estudiantes</h1>
            {registro.length === 0 ? (
                <p>no hay estudiantes</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>nombre</th>
                            <th>apellido</th>
                            <th>edad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registro.map((unRegistro, index) => (
                            <tr key={index}>
                                <td>{unRegistro.firstName}</td>
                                <td>{unRegistro.lastName}</td>
                                <td>{unRegistro.age}</td>
                                <td><button onClick={() => handleDelete(index)}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div>
    )
}

export default TableStudent