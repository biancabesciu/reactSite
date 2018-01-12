import React, { Component } from 'react';
import Yelp from '../../Util/Yelp';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {restaurantDetails: ''};
        this.detailsYelp = this.detailsYelp.bind(this);

    }

    detailsYelp(businessId) {
        Yelp.details(businessId).then(restaurantDetails => {
            this.setState({restaurantDetails:restaurantDetails})
        });
    }
   render() {
       {this.detailsYelp(this.props.match.params.businessId)}
       return (
           <div className="container-fluid">
               <div className="card h-100">
                   <h1 className="card-title">
                       {this.state.restaurantDetails.name}
                   </h1>

                   <img className="card-img-top image-container" src={this.state.restaurantDetails.imageSrc} alt={this.state.restaurantDetails.name} />

                   <div className="card-body Restaurants-information">
                       <div className="Restaurants-address">
                           <p>{this.state.restaurantDetails.name}</p>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}
export default Details;
