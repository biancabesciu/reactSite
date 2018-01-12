import React, { Component } from 'react';

//components
import Restaurants from './restaurants';

class Results extends Component {
    render() {
        return (
            <div className="Results">
                {this.props.businesses.map(business => {
                    return <Restaurants key={business.id} business={business}/>;
                })}
            </div>
        );
    }
}

export default Results;