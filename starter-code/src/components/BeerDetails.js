import React, { Component } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";

export default class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedBeer:"",
    };
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { id } = this.props.match.params;
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(beersFromTheApi => beersFromTheApi.data)
      .then(beersFromTheApi => beersFromTheApi.filter(beer => beer._id === id))
      .then(selectedBeer => {
        this.setState({
          selectedBeer: selectedBeer[0],
        });
      });
  };

  render() {
    console.log(this.state.selectedBeer);
    return <div> 
        <BeerCard beer={this.state.selectedBeer} showDetails="true"/>
    </div>;
  }
}
