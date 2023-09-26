import React, { useContext } from 'react'
import AppContext from '../AppContext'


const Comp3 = () => {

const {name, setName} = useContext(AppContext)

  return (
    <>
        <div>comp3</div>
        <h1>{name}</h1>
        <button onClick={ () => setName('Imad')}>Click here</button>
    </>
  )
}

export default Comp3