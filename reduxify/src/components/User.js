import React, { Component } from 'react';

 const User= (props)=> {
    return(
      <div>
      <h1>THE USER PAGE</h1>
      <p>User Name: {props.username}</p>
      </div>
    )
}

export default User
