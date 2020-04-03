import React, { Component } from "react";
import axios from "axios";
//import Redirect from "react-router-dom";
export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleFormSubmit = event => {
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;

    event.preventDefault();

    axios
      .post(`hhttps://ih-beers-api2.herokuapp.com/beers/new`, {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
     // .then(() => {<Redirect to="/beers" /> })
      .catch(error => console.log(error));
  };





  render() {
    return (
      <div className="row justify-content-center">
        <form
          onSubmit={this.handleFormSubmit}
          className="d-flex flex-column col-lg-6">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="name"
          />
          <label htmlFor="tagline">Tagline:</label>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="tagline"
          />
          <label htmlFor="description">Description:</label>
          <textarea
            onChange={(e) => this.handleChange(e)}
            name="description"
            cols="30"
            rows="5"
          ></textarea>
          <label htmlFor="first_brewed">First brewed:</label>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="first_brewed"
          />
          <label htmlFor="brewers_tips">Brewers tips:</label>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="brewers_tips"
          />
          <label htmlFor="attenuation_level">Attenuation level:</label>
          <input
            onChange={(e) => this.handleChange(e)}
            type="number"
            name="attenuation_level"
          />
          <label htmlFor="contributed_by">Contributed by:</label>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="contributed_by"
          />
          <label htmlFor="image_url">Image:</label>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="image_url"
          />
          <button type="submit" className="btn btn-success m-3 rounded-pill">Create new beer</button>
        </form>
      </div>
    );
  }
}
