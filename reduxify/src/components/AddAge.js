import React, { Component } from 'react';

const AddAge = (props) =>{
    return(
      <div>
      <button onClick={()=>props.changeAge()}>Change Age</button>
      </div>
    )
}

export default AddAge
