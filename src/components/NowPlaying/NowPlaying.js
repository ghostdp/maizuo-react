import React , { Component } from 'react';
import './NowPlaying.css';
import axios from 'axios';
import { mzStorage } from '../../bases/baseTools.js';

class NowPlaying extends Component {
	constructor(){
		super();
		this.state = {
			nowPlayingList : []
		};
	}
	render(){
		return (
			<div className="list">
				<ul>
					{
						this.state.nowPlayingList.map((item,index)=>{
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

		/*var nowPlayingData = window.sessionStorage.getItem('nowPlayingData');

		if( nowPlayingData ){   //从第二次开始走这里
			this.setState({
				nowPlayingList : JSON.parse(nowPlayingData)
			});
		}
		else{   //第一次走这里
			axios.get('/v4/api/film/now-playing?page=1&count=7').then((res)=>{
				var msg = res.data.msg;
				if(msg === 'ok'){
					this.setState({
						nowPlayingList : res.data.data.films
					});
					window.sessionStorage.setItem('nowPlayingData' , JSON.stringify(this.state.nowPlayingList));
				}
			});
		}*/


		var nowPlayingData = mzStorage.getSession('nowPlayingData');

		if( nowPlayingData ){   //从第二次开始走这里
			this.setState({
				nowPlayingList : JSON.parse(nowPlayingData)
			});
		}
		else{   //第一次走这里
			axios.get('/v4/api/film/now-playing?page=1&count=7').then((res)=>{
				var msg = res.data.msg;
				if(msg === 'ok'){
					this.setState({
						nowPlayingList : res.data.data.films
					});
					mzStorage.setSession('nowPlayingData' , JSON.stringify(this.state.nowPlayingList));
				}
			});
		}

		
	}
}

export default NowPlaying;