import React, { Component } from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'locale': ''
        };
        this.handleDetailChange = this.handleDetailChange.bind(this);
    }

    handleDetailChange(event) {
        this.setState({locale:this.state.locale});
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="Results">
                </div>

                <div className="card h-100">
                    <h1 className="card-title">
                        {this.props.business.name}
                    </h1>

                    <img className="card-img-top image-container" src={this.props.business.imageSrc} alt={this.props.business.name} />

                    <div className="card-body Restaurants-information">
                        <div className="Restaurants-address">
                            <p>{this.props.business.price}</p>
                            <p>{this.props.business.hours}</p>
                            <p>{this.props.business.phone}</p>
                            <p>{this.props.business.address}</p>
                            <p>{this.props.business.city}</p>
                            <p>{this.props.business.state}</p>
                        </div>

                        <div className="Restaurants-reviews">
                            <h3 className="rating">{this.props.business.rating} stars</h3>
                            <p>{this.props.business.reviewCount}</p>
                        </div>

                        <div className="Restaurants-photos">
                            <p>{this.props.business.photos}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Details;