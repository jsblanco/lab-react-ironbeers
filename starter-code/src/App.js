import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import BeerList from "./components/BeerList";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/beers" component={BeerList} />
          <Route path="/beers/:id" component={BeerDetails} />
          <Route path="/random" component={RandomBeer} />
          <Route path="/new" component={NewBeer} />
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
