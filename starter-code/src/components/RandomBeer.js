import React, { Component } from 'react'
import axios from "axios"
import BeerCard from './BeerCard';

export default class RandomBeer extends Component {
    state = {
        beerData: "{}",
      };
    
      componentDidMount() {
        this.getBeers();
      }
    
      getBeers = async () => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers/random")
          .then((beersFromTheApi) => {
              console.log(beersFromTheApi.data)
            this.setState({
              beerData: beersFromTheApi.data
            });
          });
      };
    

      //       <BeerCard beer={this.state.beerData} showDetails="true"/>

      
      render() {
          return (
            <div><BeerCard beer={this.state.beerData} showDetails="true"/>
            </div>
        )
    }
}
