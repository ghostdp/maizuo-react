import React , { Component } from 'react';
import './Movie.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
 
class Movie extends Component {
	constructor(){
		super();
		this.state = {
			movieList : []
		};
		this.isMove = false;
		this.handleToMove = this.handleToMove.bind(this);
		this.handleToDetail = this.handleToDetail.bind(this);
	}
	render(){
		return (
			<div id="mz_movie">
				<ul>
					{
						this.state.movieList.map((item,index)=>{
							return (
								<li onTouchMove={this.handleToMove} onTouchEnd={ ()=>{ this.handleToDetail(item.id) } } key={item.id}>
									<img src={item.cover.origin} alt="" />
									<div className="info">
										<div className="title">
											<p>{item.name}</p>
											<p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
										</div>
										<div className="score">{item.grade}</div>
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
		axios.get('/v4/api/film/now-playing',{
			params : {
				page : 1,
				count : 5
			}
		}).then((res)=>{
			var msg = res.data.msg;
			if(msg === 'ok'){
				this.setState({
					movieList : res.data.data.films
				});
			}
		});
	}
	handleToMove(){
		this.isMove = true;
	}
	handleToDetail(cid){
		if(this.isMove){  //移动走这里
			this.isMove = false;
		}
		else{   //点击走这里
			//编程式路由的跳转
			this.props.history.push('/detail/'+cid);
		}
	}
	
}

export default withRouter(Movie);