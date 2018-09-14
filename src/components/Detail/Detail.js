import React , { Component } from 'react';
import './Detail.css';
import axios from 'axios';
import { connect } from 'react-redux';

class DetailUI extends Component {
	constructor(){
		super();
		this.state = {
			detailObj : {}
		};
	}
	render(){
		return (
			<div id="mz_detail">
				<div className="banner"><img src={ this.state.detailObj.cover && this.state.detailObj.cover.origin } alt="" /></div>
				<div className="info">
					<h2>影片简介</h2>
					<dl>
						<dt>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
						<dd>{ this.state.detailObj.director }</dd>
					</dl>
					<dl>
						<dt>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
						<dd>
							{
								this.state.detailObj.actors && this.state.detailObj.actors.map((item,index)=>{
										if(index === 0){
											return item.name;
										}
										else{
											return ' | ' + item.name;
										}
								})
							}
						</dd>
					</dl>
					<dl>
						<dt>地区语言：</dt>
						<dd>{ this.state.detailObj.language }</dd>
					</dl>
					<dl>
						<dt>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</dt>
						<dd>{ this.state.detailObj.category }</dd>
					</dl>
					<dl>
						<dt>上映日期：</dt>
						<dd>{ this.formatTime(this.state.detailObj.premiereAt) }</dd>
					</dl>
					<p>{ this.state.detailObj.synopsis }</p>
				</div>
			</div>
		);
	}
	componentDidMount(){
		var cid = this.props.match.params.cid;
		axios.get('/v4/api/film/'+cid).then((res)=>{
			var msg = res.data.msg;
			if(msg === 'ok'){
				this.setState({
					detailObj : res.data.data.film
				});
				this.props.changeFilmName( this.state.detailObj.name );
			}
		});
	}
	formatTime(premiereAt){
		if(premiereAt){
			var date = new Date();
			date.setTime(premiereAt);
			return (date.getMonth() + 1) + '月' + date.getDate() + '日上映';
		}
		else{
			return '';
		}
	}
}

function mapStateToProps(state){
	return {};
}
function mapDispatchToProps(dispatch){
	return {
		changeFilmName(filmName){
			dispatch({ type : 'CHANGE_FILMNAME' , payload : filmName });
		}
	};
}

var Detail = connect(mapStateToProps,mapDispatchToProps)(DetailUI);

export default Detail;