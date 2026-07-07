import React from 'react'

const Child = (a) => {
    //object deconstructing
    const{id,name,username,email}=a.data;
  return (
  <>
  <h2>ID:{id}</h2>
  <h2>UserName:{username}</h2>
  <h2>Name:{name}</h2>
  <h2>Email:{email}</h2>
  </>
  )
}

export default Child
