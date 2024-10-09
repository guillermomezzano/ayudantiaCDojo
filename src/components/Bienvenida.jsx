

const Bienvenida = () => {
    const person = {
        name: 'Juan',
        age: 30,
        occupation: 'Desarrollador'

    }

    console.log('este es el name', person)
    return (

        <>
            <h1>hola como estas {person.name}</h1>
            <p>este es un saludo {person.age}</p>
        </>
    )
}

export default Bienvenida