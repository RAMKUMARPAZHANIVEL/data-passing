import React from 'react'
import { useContext } from 'react'
import { mainContext } from '../contexts'
const Component4 = () => {
    const data = useContext(mainContext);
    console.log(data);
  return (
    <div style={{display : "flex",flexDirection : "row",justifyContent : "center",gap: "2rem",alignItems : "center"}}>
        <h2>Component 4</h2>
        <h4>{data}</h4>
    </div>
  )
}

export default Component4