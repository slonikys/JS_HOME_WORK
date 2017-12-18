import React from 'react';
import times from 'lodash.times';

class Select extends React.Component {
  state = {
vote :'1',
  };
  _handleVote = (evt) => {
    const target = evt.target;
    this.setState({vote: target.value},
  () =>this.props.handelVote(this.state.vote)
  );
  }
  render () {
    let items = times(10);
    return (
    <select name="numbers" className='main-form__movie-ratio' value={this.state.vote} onChange={this._handleVote}>
    {items.map( idx => <option key={idx} value={idx+1}>{idx+1}</option>)}
    </select>)
  }
}

export default Select;