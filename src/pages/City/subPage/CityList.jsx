import React, {Component} from "react";
import { hashHistory } from 'react-router-dom'
class CityList extends Component {
	render() {
		return(
			<div className="city-list">
				<div className="title">
					热门城市
				</div>
				<div className="list-content">
					<span onClick={this.clickHandle.bind(this,"北京")}>北京</span>
					<span onClick={this.clickHandle.bind(this,"深圳")}>深圳</span>
					<span onClick={this.clickHandle.bind(this,"上海")}>上海</span>
					<span onClick={this.clickHandle.bind(this,"天津")}>天津</span>
					<span onClick={this.clickHandle.bind(this,"杭州")}>杭州</span>
					<span onClick={this.clickHandle.bind(this,"石家庄")}>石家庄</span>
				</div>
			</div>
		)
	}
	clickHandle(cityName) {
		this.props.changCityFn(cityName);
	}
}

export default CityList;