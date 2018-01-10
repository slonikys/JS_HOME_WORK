import React from "react";
import Select from "components/Select";
import Checkbox from "components/Checkbox";
import v4 from "uuid/v4";

class Form extends React.Component {
  state = {
    id: "",
    title: "",
    overview: "",
    vote: "",
    genres: []
  };
  _handleTitleChange = evt => {
    this.setState({ title: evt.target.value });
  };
  _handleOverviewChange = event => {
    this.setState({ overview: event.target.value });
  };
  _handleVoteChange = elem => {
    this.setState({ vote: `${elem}/10` });
  };
  _handleGenresChange = elem => {
    this.setState({ genres: elem });
  };

  _handleSubmit = event => {
    event.preventDefault();
    if (this.state.title !== "" && this.state.overview !== "") {
      this.setState({ id: v4() }, () => this.props.onFormSubmit(this.state));
    } else {
      alert("Заполните поля: Title и Description !");
    }
  };

  render() {
    return (
      <section className="left-section" onSubmit={this._handleSubmit}>
        <form action="#" className="main-form">
          <fieldset className="main-form__field">
            <legend>Add film</legend>
            <label>
              Title<input
                type="text"
                className="main-form__movie-title"
                value={this.state.title}
                onChange={this._handleTitleChange}
              />
            </label>
            <label>
              Discription<textarea
                name="discription"
                cols="30"
                rows="10"
                className="main-form__movie-description"
                value={this.state.overview}
                onChange={this._handleOverviewChange}
              />
            </label>
            <label>
              Rating<Select handelVote={this._handleVoteChange} />
            </label>
            <Checkbox onGenreChange={this._handleGenresChange} />
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </section>
    );
  }
}
export default Form;
