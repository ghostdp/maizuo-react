import React , { Component } from 'react';
import './Banner.css';

class Banner extends Component {
	render(){
		return (
			<div id="mz_banner" className="swiper-container">
				<ul className="swiper-wrapper">
					<li className="swiper-slide"><img src="/images/1.jpg" alt="" /></li>
					<li className="swiper-slide"><img src="/images/2.jpg" alt="" /></li>
					<li className="swiper-slide"><img src="/images/3.jpg" alt="" /></li>
				</ul>
			</div>
		);
	}
}

export default Banner;