
import React, { useState } from 'react'

const Contador = () => {
    const [Valor, setValor] = useState(0)


    function aumentar() {
        setValor(Valor + 1)
    }
    function decrementar() {
        setValor(Valor - 1)
    }
    
  return (
    <div>
        <h1>Contador</h1>
        <h2>contador 2</h2>
        <h3>contador 3</h3>
        <h4>contador 4</h4>
        <h5>contador 5</h5>
        <button onClick={aumentar}>Aumentar</button><span>  {Valor}  </span>
        <button onClick={decrementar}>Decrementar</button>   
        
    </div>
  )
}

export default Contador