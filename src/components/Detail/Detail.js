import React , { Component } from 'react';
import './Detail.css';

class Detail extends Component {
	render(){
		return (
			<div id="mz_detail">
				<div className="banner"><img src="/images/4.jpg" alt="" /></div>
				<div className="info">
					<h2>影片简介</h2>
					<dl>
						<dt>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
						<dd>阿瓦提·钱德安</dd>
					</dl>
					<dl>
						<dt>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
						<dd>阿米尔·汗 | 泽伊拉·沃西姆 | 梅·维贾 | 拉杰·阿晶 | 法鲁克·贾法尔</dd>
					</dl>
					<dl>
						<dt>地区语言：</dt>
						<dd>印度(印地语 英语)</dd>
					</dl>
					<dl>
						<dt>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</dt>
						<dd>剧情|音乐</dd>
					</dl>
					<dl>
						<dt>上映日期：</dt>
						<dd>1月19日上映</dd>
					</dl>
					<p>出生在小城镇穆斯林家庭的尹希娅一直有一个梦想：成为全世界最优秀的歌手，可却遭到家暴成性的父亲百般阻挠。懦弱的母亲除了背着父亲悄悄满足尹希娅许多小需求以外，并没有办法实质性的改善她的生活，没有勇气离婚带她离开这个女人不受尊重的地方，更没有勇气支持她的梦想。追梦心切的尹希娅在视频网站上，以“神秘巨星”为名，穿上罩袍上传自己的唱歌视频，不仅被观众喜欢，那些政客、明星、音乐导演也纷纷转发她的视频，甚至音乐导演夏克提•库马尔也向尹希娅抛出了橄榄枝。在夏克提和好朋友钦腾的帮助下，尹希娅开始一步步向梦想靠近…</p>
				</div>
			</div>
		);
	}
}

export default Detail;