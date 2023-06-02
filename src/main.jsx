import React from 'react'
import ReactDOM from 'react-dom/client'
import HolaMundo from './components/HolaMundo'
import Variables from './components/Variables'
import Contador from './components/Contador'
import PeticionApi from './components/PeticionApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeticionApi />
  </React.StrictMode>,
)
