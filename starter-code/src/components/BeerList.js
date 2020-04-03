import React, { Component } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";

export default class BeerList extends Component {
  state = {
    beerArray: [],
  };

  componentDidMount() {
    this.getBeers();
  }

  getBeers = async () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((beersFromTheApi) => {
        this.setState({
          beerArray: beersFromTheApi.data,
        });
      });
  };

  render() {
    return (
      <div className="row">
        {this.state.beerArray.map((beer) => {
          return <BeerCard beer={beer} key={beer._id} />;
        })}
      </div>
    );
  }
}
