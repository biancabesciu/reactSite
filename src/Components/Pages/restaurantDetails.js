import React, { Component } from 'react';
// import Restaurants from "../Results/restaurants";

class Details extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card h-100">
                    <h1>Details</h1>
                    {/*<img className="card-img-top image-container" src={this.props.business.imageSrc} alt={this.props.business.name} />*/}
                    {/*<h2 className="card-title">*/}
                        {/*{this.props.business.name}*/}
                    {/*</h2>*/}

                    {/*<div className="card-body Restaurants-information">*/}
                        {/*<div className="Restaurants-address">*/}
                            {/*<p>{this.props.business.address}</p>*/}
                            {/*<p>{this.props.business.city}</p>*/}
                            {/*<p>{this.props.business.state}</p>*/}
                        {/*</div>*/}

                        {/*<div className="Restaurants-reviews">*/}
                            {/*<h3 className="rating">{this.props.business.rating} stars</h3>*/}
                            {/*<p>{this.props.business.reviewCount}</p>*/}
                        {/*</div>*/}

                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default Details;