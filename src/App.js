import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

//components
import Header from './Components/Header/header';
import Results from './Components/Results/results';
import SearchBar from './Components/Header/searchBar';
import Details from './Components/Pages/restaurantDetails';
import Yelp from './Util/Yelp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {businesses: []};
        this.searchYelp = this.searchYelp.bind(this);
        this.detailsYelp = this.detailsYelp.bind(this);
    }

    searchYelp(term, location, sortBy) {
       Yelp.search(term,location,sortBy).then(businesses => {
           this.setState({businesses:businesses})
       });
    }

    detailsYelp(locale) {
        Yelp.details(locale).then(businesses => {
            this.setState({businesses:businesses})
        });

    }


    render() {
        return (
            <Router>
                <div className="App">

                    <Header />
                    <SearchBar searchYelp={this.searchYelp} />
                    <Results businesses={this.state.businesses} />
                    <Route exact path='/Details' component={Details} />

                </div>
            </Router>
        );
    }
}

export default App;
