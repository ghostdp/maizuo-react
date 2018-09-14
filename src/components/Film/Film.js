import React , { Component } from 'react';
import './Film.css';
import NowPlaying from '../NowPlaying/NowPlaying.js';
import ComingSoon from '../ComingSoon/ComingSoon.js';
import { Route , Switch , Redirect , NavLink } from 'react-router-dom';

class Film extends Component {
	render(){
		return (
			<div id="mz_film">
				<div className="tab">
					<NavLink to="/film/nowplaying">正在上映</NavLink>
					<NavLink to="/film/comingsoon">即将上映</NavLink>
				</div>
				<Switch>
					<Route path="/film/nowplaying" component={NowPlaying} />
					<Route path="/film/comingsoon" component={ComingSoon} />
					<Redirect from="/film" to="/film/nowplaying" />
				</Switch>
			</div>
		);
	}
}

export default Film;