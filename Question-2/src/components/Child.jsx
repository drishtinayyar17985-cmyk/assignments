import React from 'react'

const Child = (a) => {
 
 
 const{username,name,id,email}=a.detail;
    return (
  <>
  

  <div className="card w-25" >
  <ul className="list-group list-group-flush border-bottom border-2 border-info">
    <li className="list-group-item">{username}</li>
    <li className="list-group-item">{name}</li>
    <li className="list-group-item">{email}</li>
  </ul>
  <div className="card-footer">
  <h2>{id}</h2>
  </div>
</div>
  

 
 
  </>
  )
}

export default Child
