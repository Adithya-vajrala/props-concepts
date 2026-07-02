import React from 'react'

type ChildProps = {
    name:string;
    age:number;
}

function Child({name,age}:ChildProps) {
  return (
    <>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
    </>
  )
}

export default Child
