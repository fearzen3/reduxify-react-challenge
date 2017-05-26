import React, { Component } from 'react';

const Main = (props) =>{
    return(
      <div>
      <h1>THE MAIN PAGE</h1>
      <button onClick={()=>props.changeUsername()}>Change Username</button>
      </div>
    )
}

export default Main
