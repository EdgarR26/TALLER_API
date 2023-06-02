import React, { useState } from 'react'

const PeticionApi = () => {
    const [personajes, setpersonajes] = useState([])
    const [paginacion, setpaginacion] = useState(0)

    const traerPersonajes = async() =>{
        try{ 
            const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=6bc324943ea78d1f68b6925dc013c74f&hash=cbb7d5088c8df6b8282fd457b44dfe8c&ts=1000&offset=${paginacion}`)
            const respuesta = await res.json()
            const auxpersonajes = respuesta.data.results
            console.log(auxpersonajes)
            setpersonajes (auxpersonajes)

        }catch(error){
            console.log(error)
        }
    }

    const siguiente = () => {
        setpaginacion(paginacion+20)
        traerPersonajes()
    }
    
    const atras = () =>{
        setpaginacion(paginacion-20)
        traerPersonajes()
    }

  return (
    <div>
        <h1>API MARVEL</h1>
        <button onClick={traerPersonajes}>TraerPersonajes</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={atras}>Atras</button>
        {
            personajes.map((aux) => (
                <div key={aux.id}>
                    <h4>{aux.name}</h4>
                    <img src={aux.thumbnail.path+'.'+aux.thumbnail.extension} alt={aux.name} />
                </div>
            ))
        }
        </div>
  )
}

export default PeticionApi