import React from 'react'
import Child from './Child'
const Parent = () => {
    const details=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
     
     
      },
    
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    
    
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      
        }
    ];
   

  return (
    <>
    <h1>This is parent component</h1>
    <div className='cointainer'>
        <div className='row g-2'>
    {
    details.map((data,index)=>(
        
     <Child detail={data} key={index}/>
     
    ))
    
    }
    </div>
    </div>
    </>
  )
}

export default Parent
