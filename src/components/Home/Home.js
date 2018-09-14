import React , { Component , Fragment } from 'react';
import './Home.css';
import Banner from '../Banner/Banner.js';
import Movie from '../Movie/Movie.js';

class Home extends Component {
	render(){
		return (
			<Fragment>
				<Banner />
				<Movie />
			</Fragment>
		);
	}
}

export default Home;