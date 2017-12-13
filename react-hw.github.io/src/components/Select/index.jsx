import React from 'react';
import times from 'lodash.times';
import v4 from 'uuid';

class Select extends React.Component {
  render () {
    let items = times(10);
    return (
    <select name="numbers" className='main-form__movie-ratio' id='js-ratio'>
    {items.map( idx => <option key={v4()}>{idx+1}</option>)}
    </select>)
  }
}

export default Select;