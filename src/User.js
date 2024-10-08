import React from 'react'

export default function User(props) {


  return (
    <div>
      <h1>User Component!</h1>
      <h2>name:{props.data.name}</h2>
      <h2>age:{props.data.age}</h2>
    </div>
  )
}
