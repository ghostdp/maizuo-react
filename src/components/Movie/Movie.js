import React , { Component } from 'react';
import './Movie.css';

class Movie extends Component {
	render(){
		return (
			<div id="mz_movie">
				<ul>
					<li>
						<img src="/images/4.jpg" alt="" />
						<div className="info">
							<div className="title">
								<p>神秘巨星</p>
								<p>9家影院上映1331134人购票</p>
							</div>
							<div className="score">8.5</div>
						</div>
					</li>
					<li>
						<img src="/images/5.jpg" alt="" />
						<div className="info">
							<div className="title">
								<p>神秘巨星</p>
								<p>9家影院上映1331134人购票</p>
							</div>
							<div className="score">8.5</div>
						</div>
					</li>
					<li>
						<img src="/images/4.jpg" alt="" />
						<div className="info">
							<div className="title">
								<p>神秘巨星</p>
								<p>9家影院上映1331134人购票</p>
							</div>
							<div className="score">8.5</div>
						</div>
					</li>
					<li>
						<img src="/images/5.jpg" alt="" />
						<div className="info">
							<div className="title">
								<p>神秘巨星</p>
								<p>9家影院上映1331134人购票</p>
							</div>
							<div className="score">8.5</div>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default Movie;