import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//css
import "../../Assets/css/restaurants.css";

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'locale': {}
        };
    }

    render() {
        return (
            <div className="container Restaurants">
                <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card h-100">
                            <Link to={`/Details/${this.props.business.id}`}><img className="card-img-top image-container" src={this.props.business.imageSrc} alt={this.props.business.name} /></Link>
                            <h2 className="card-title">
                                <Link to={`/Details/${this.props.business.id}`}>{this.props.business.name}</Link>
                            </h2>

                            <div className="card-body Restaurants-information">
                                <div className="Restaurants-address">
                                    <p>{this.props.business.address}</p>
                                    <p>{this.props.business.city}</p>
                                    <p>{this.props.business.state}</p>
                                    <p>{this.props.business.zipCode}</p>
                                </div>

                                <div className="Restaurants-reviews">
                                    <h3 className="rating">{this.props.business.rating} stars</h3>
                                    <p>{this.props.business.reviewCount} reviews</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Restaurants;