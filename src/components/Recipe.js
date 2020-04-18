import React, { Component } from 'react';

export default class Recipe extends Component {
  render() {
    console.log(this.props.result)
    const {
      id,
      title,
      readyInMinutes,
      servings,
      image,
      sourceUrl

    } = this.props.result;

    return (
      <React.Fragment>
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img src={image} className="img-card-top" 
            style={{height:"14rem"}} 
            alt="recipe" />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary">Details</button>
              {/* nie daje tutaj a href bo musze miec sourceUrl ktore jest w innym endpoincie*/}
              {/* link dam po wejsciu w details. Tam bedzie przycisk ktory bedzie wywolywal GET na endpoint ktory ma sourceURL */}
              <a 
                href={sourceUrl}
                className="btn btn-success mx-2 text-capitalize text-white"
                target="_blank" rel="noopener noreferrer">Recipe URL</a>

              
            </div>
            </div>
            </div>
      </React.Fragment> 
    );
  }
}
