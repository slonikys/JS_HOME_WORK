import React from 'react';

class Select extends React.Component {
    render () {
      return (
          <select name="numbers" className='main-form__movie-ratio' id='js-ratio'>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
            <option value="4" label="4"></option>
            <option value="5" label="5"></option>
            <option value="6" label="6"></option>
            <option value="7" label="7"></option>
            <option value="8" label="8"></option>
            <option value="9" label="9"></option>
            <option value="10" label="10"></option>
          </select>
      );
    }
}

export default Select;