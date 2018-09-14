import React , { Component , Fragment } from 'react';
import './Home.css';
import Banner from '../Banner/Banner.js';
import Movie from '../Movie/Movie.js';
import { connect } from 'react-redux';

class HomeUI extends Component {
	render(){
		return (
			<Fragment>
				<Banner />
				<Movie />
			</Fragment>
		);
	}
	componentDidMount(){
		this.props.changeFilmName();
	}
}

function mapStateToProps(state){
	return {};
}
function mapDispatchToProps(dispatch){
	return {
		changeFilmName(){
			dispatch({ type : 'CHANGE_FILMNAME' , payload : '卖座电影' });
		}
	};
}

var Home = connect(mapStateToProps,mapDispatchToProps)(HomeUI);

export default Home;