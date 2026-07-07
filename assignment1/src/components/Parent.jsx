import React from 'react'
import Child from './Child'

const Parent = () => {
    const userName="Drishti"
  return (
    <>
      <h1>This is parent Component</h1>
      <h2>Data is passed from parent component</h2>
      <Child fname={userName}/>
    </>
  )
}

export default Parent
