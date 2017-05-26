export function setName(name){
  return{
    type : "SET_NAME",
    payload: name
  }
}

export function setAge(number){
  // return dispatch => {
  //   setTimeout(()=>{
  //       dispatch({
  //         type : "SET_AGE",
  //         payload: number
  //       })
  //   },2000);
  // }
  return{
    type : "SET_AGE",
    payload: new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(number)
      },2000)
    })
  }



}
