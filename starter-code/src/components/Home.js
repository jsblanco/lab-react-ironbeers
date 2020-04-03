import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="row justify-content-around">
            <div className="card col-lg-3">
              <img
                src="/images/beers.png"
                alt="All beers"
                className="card-img-top"
              ></img>
              <div className="card-body">
                <div className="card-title">
                  <a href="/beers">
                  <h3 className="text-muted">All Beers</h3>
                  </a>
                </div>
                <div className="card-subtitle">
                  <p className="lead text-secondary">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="card col-lg-3">
              <img
                src="/images/random-beer.png"
                alt="Random beer"
                className="card-img-top"
              ></img>
              <div className="card-body">
                <div className="card-title">
                <a href="/random">
                  <h3 className="text-muted">Random Beer</h3>
                </a>
                </div>
                <div className="card-subtitle">
                  <p className="lead text-secondary">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="card col-lg-3">
              <img
                src="/images/new-beer.png"
                alt="New beer"
                className="card-img-top"
              ></img>
              <div className="card-body">
                <div className="card-title">
                <a href="/new">
                  <h3 className="text-muted">New Beer</h3>
                </a>
                </div>
                <div className="card-subtitle">
                  <p className="lead text-secondary">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
