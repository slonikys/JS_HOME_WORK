import React from 'react';
import Select from 'components/Select';

class Form extends React.Component {
    render () {
        return(
    <section className="left-section">
        <form action="#" className='main-form'>
          <fieldset className='main-form__field'>
          <legend>Add film</legend>
          <label htmlFor="js-name">Title</label>
          <input type="text" id="js-name" className='main-form__movie-title' />
          <label htmlFor="js-discription">Discription</label>
          <textarea name="discription" id="js-discription" cols="30" rows="10" className='main-form__movie-description'></textarea>
          <label htmlFor="js-rating"></label>
          <label htmlFor="js-ratio">Rating</label>
          <Select />
          <input type="submit" value="Submit"/>
          </fieldset>
        </form>
    </section>
        );
    }
}
export default Form