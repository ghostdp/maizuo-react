import React , { Component , Fragment } from 'react';
import './Nav.css';
import { connect } from 'react-redux';

/*class Nav extends Component {
	render(){
		return (
			<div id="mz_menu">
				<ul>
					<li>首页<i className="iconfont icon-moreunfold"></i></li>
					<li>影片<i className="iconfont icon-moreunfold"></i></li>
					<li>影院<i className="iconfont icon-moreunfold"></i></li>
					<li>商城<i className="iconfont icon-moreunfold"></i></li>
					<li>我的<i className="iconfont icon-moreunfold"></i></li>
					<li>卖座卡<i className="iconfont icon-moreunfold"></i></li>
				</ul>
			</div>
		);
	}
}*/

class NavUI extends Component {
	render(){
		return (
			<Fragment>
				{
					this.props.navShow && 
					<div id="mz_menu">
						<ul>
							<li>首页<i className="iconfont icon-moreunfold"></i></li>
							<li>影片<i className="iconfont icon-moreunfold"></i></li>
							<li>影院<i className="iconfont icon-moreunfold"></i></li>
							<li>商城<i className="iconfont icon-moreunfold"></i></li>
							<li>我的<i className="iconfont icon-moreunfold"></i></li>
							<li>卖座卡<i className="iconfont icon-moreunfold"></i></li>
						</ul>
					</div>
				}
			</Fragment>
		);
	}
}

function mapStateToProps(state){
	return {
		navShow : state.navShow
	};
}
function mapDispatchToProps(dispatch){
	return {};
}

var Nav = connect(mapStateToProps , mapDispatchToProps)( NavUI );

export default Nav;