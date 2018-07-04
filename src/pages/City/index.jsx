import React, {Component} from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../redux/actions/userInfo' 
import Header from "../../components/Header"
import CityList from "./subPage/CityList"
import LocalStore from "../../util/localStore"
import {CITYNAME} from "../../config/localStorageKey"
require("./index.less")
class City extends Component {
	render() {
		console.log(this.props.userinfo)
		return(
			<div className="city">
				<Header title="选择城市"/>
				<div className="city-content">
					<div className="current-city">
						{this.props.userinfo.cityName}
					</div>
					<CityList changCityFn={this.changList.bind(this)}/>
				</div>
			</div>
		)
	}
	componentDidMount() {
		console.log(this.props.userinfo)
	}
	changList(cityName) {
		//改变redux中存储的地理位置的值
		this.props.userInfoActions.update({
            cityName : cityName
        })
        //更改localStorage的值
		LocalStore.setItem(CITYNAME, cityName);
		// 跳转页面
		this.props.history.push("/home")
	}
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)