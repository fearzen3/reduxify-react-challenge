import React, { Component } from 'react';
import {connect} from 'react-redux'

import User from '../components/User.js'
import Main from '../components/Main.js'
import AddAge from '../components/AddAge.js'
import {setName, setAge} from '../actions/userActions'



class App extends Component {
  constructor(){
    super();

  }

  changeUsername(newName){
  }

  render() {
    return (
      <div>
      <Main changeUsername={() => this.props.setName("Ivan")}/>
      <AddAge changeAge={() => this.props.setAge(30)}/>
      <User username={this.props.user.name}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
    math: state.math
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setName:(name)=>{
      dispatch(setName(name ))
    },
    setAge:(number)=>{
      dispatch(setAge(number))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)
