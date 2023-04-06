import App from "./App";

import React, { useState } from 'react'

const Main = () => {
    const[value,setValue] = useState();
    const getInput = (data) => {
        setValue(data)
    }
  return (
    <div>
        <h1>Data transfer from child to parent and parent to child</h1>
        <div style={{display : "flex",flexDirection : "row",justifyContent : "center",gap: "2rem",alignItems : "center"}}>
        <h2>main component</h2>
        <h3>{value}</h3>
    </div>
     <App getInput={getInput} />
    </div>
  )
}

export default Main