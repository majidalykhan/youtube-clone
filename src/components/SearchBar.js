import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <div id="nav-center">
        <form class="search-container" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            name="search"
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
