import React , { Component } from 'react';
import './ComingSoon.css';
import axios from 'axios';

import { mzStorage } from '../../bases/baseTools.js';

class ComingSoon extends Component {
	constructor(){
		super();
		this.state = {
			comingSoonList : []
		};
	}
	render(){
		return (
			<div className="list">
				<ul>
					{
						this.state.comingSoonList.map((item,index)=>{
							return (
								<li key={item.id}>
									<div className="img"><img src={item.poster.origin} alt="" /></div>
									<div className="info">
										<p><span>{ item.name }</span><span>{ item.grade }<i className="iconfont icon-moreunfold"></i></span></p>
										<p>{ item.intro }</p>
										<p><span>{ item.cinemaCount }家影院上映</span><span>{ item.watchCount }人购票</span></p>
									</div>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
	componentDidMount(){
		
		/*var comingSoonData = window.sessionStorage.getItem('comingSoonData');

		if(comingSoonData){
			this.setState({
				comingSoonList : JSON.parse(comingSoonData)
			});
		}
		else{

			axios.get('/v4/api/film/coming-soon?page=1&count=7').then((res)=>{
				var msg = res.data.msg;
				if(msg === 'ok'){
					this.setState({
						comingSoonList : res.data.data.films
					});
					window.sessionStorage.setItem('comingSoonData' , JSON.stringify(this.state.comingSoonList));
				}
			});

		}*/

		
		var comingSoonData = mzStorage.getSession('comingSoonData');

		if(comingSoonData){
			this.setState({
				comingSoonList : JSON.parse(comingSoonData)
			});
		}
		else{

			axios.get('/v4/api/film/coming-soon?page=1&count=7').then((res)=>{
				var msg = res.data.msg;
				if(msg === 'ok'){
					this.setState({
						comingSoonList : res.data.data.films
					});
					mzStorage.setSession('comingSoonData' , JSON.stringify(this.state.comingSoonList));
				}
			});

		}

	}
}

export default ComingSoon;