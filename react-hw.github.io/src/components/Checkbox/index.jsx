import React, { Component } from 'react'


export default class Checkbox extends Component {

  state ={
    isCheked:{
      action:false,
      drama:false,
      horor:false
    },
    genre:[]
    }
  
_handelCheked = (evt) =>{
  let object=Object.assign(this.state.isCheked);
  object[evt.target.value]=evt.target.checked;
  let genres = Object.assign(this.state.genre);
    if (evt.target.checked) {
      genres= [...genres,evt.target.value];
      this.setState({genre: genres}, 
      () =>this.props.onGenreChange(this.state.genre));
    } else {
      genres= genres.filter( (item) => item!==evt.target.value)
      this.setState({genre: genres},
      () =>this.props.onGenreChange(this.state.genre));
          }
    this.setState({isCheked: object})}

  render() {
      return ( 
        <div className='movie__gender'>
         <label><input type='checkbox' checked={this.state.isCheked.action} value='action' onChange={this._handelCheked}/>action</label>
         <label><input type='checkbox' checked={this.state.isCheked.drama} value='drama' onChange={this._handelCheked}/>drama</label>
         <label><input type='checkbox' checked={this.state.isCheked.horor} value='horor' onChange={this._handelCheked}/>horor</label>
        </div>
    )
  }
}
