import React , { Component } from 'react';
import './Banner.css';
import axios from 'axios';

class Banner extends Component {
	constructor(){
		super();
		this.state = {
			bannerList : []
		};
	}
	render(){
		return (
			<div ref="mz_banner" id="mz_banner" className="swiper-container">
				<ul className="swiper-wrapper">
					{
						this.state.bannerList.map((item,index)=>{
							return ( 
								<li className="swiper-slide" key={item.id}>
									<img src={item.imageUrl} alt="" />
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
	componentDidMount(){
		axios.get('/v4/api/billboard/home').then((res)=>{
			var msg = res.data.msg;
			if(msg === 'ok'){
				this.setState({
					bannerList : res.data.data.billboards
				});
				
				new window.Swiper(this.refs.mz_banner,{
					loop : true
				});

			}
		});
	}
}

export default Banner;