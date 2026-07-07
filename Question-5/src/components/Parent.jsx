import React from 'react'
import Child from './Child'
const Parent = () => {
    const details={
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
      
    }
    

   

  return (
    <>
<Child data={details}/>
    </>
  )
}

export default Parent
