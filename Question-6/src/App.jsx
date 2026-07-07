import React from 'react'
import { useState } from 'react'

const App = () => {
  
    const [dark,setDark]=useState(false);
    const ChangeTheme=() =>
    {
      setDark(!dark);
    }
   return(
    <>
    <div style={{backgroundColor:dark?"purple":"pink",
                color:dark?"pink":"purple",
                height:"100vh",
                padding:"20px"}}>

      <h1>Dark/Light Mode</h1>
      <h1>{dark?"Dark Mode":"Light Mode"}</h1>
    <button className='btn btn-success' onClick={ChangeTheme}>
      {dark?"ON":"OFF"}
    </button>
    </div>
    </>
  )
}

export default App
