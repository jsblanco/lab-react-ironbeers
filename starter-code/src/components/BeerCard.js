import React from "react";

const BeerCard = (props) => {
  return (
    <div className="card col-lg-2 d-flex p-3 flex-column align-items-center">
      <img
        src={props.beer.image_url}
        alt={props.beer.name}
        className="card-img-top beer-mugshot"
      ></img>
      <div className="card-body">
        <div className="card-title">
          <a href={`/beers/${props.beer._id}`}>
            <h4 className="text-muted">{props.beer.name}</h4>
          </a>
        </div>
        <div className="card-subtitle">
          <p className="text-muted font-italic">{props.beer.tagline}</p>
          {props.showDetails && (
            <p className="text-secondary">{props.beer.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeerCard;

