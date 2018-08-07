import React, {Component} from "react";
import Header from "../../components/Header";
import LoginComponent from "../../components/Login";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as fetch from "../../fetch/order"
import UserInfo from "./subPages/userInfo"
import OrderList from "./subPages/orderList"
require("./index.less")
class User extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	orders: []
        }
    }
	render() {
		return(
			<div>
				<Header title="用户中心" formAddress="user" history={this.props.history}/>
				<UserInfo userName={this.props.userInfo.username} userCity={this.props.userInfo.cityName}/>
				<OrderList lists={this.state.orders}/>
			</div>
			
		)
	}
	componentDidMount() {
		const userName = this.props.userInfo.username;
		if(!userName) {
			console.log(1111,this.props.history)
			this.props.history.push("/login")
		}
		this.loadData(userName);
	}
	loadData(userName) {
		const result = fetch.getOrder(userName)
		result.then(res => {
			return res.json();
		}).then(jsonData => {
			this.setState({
				orders: jsonData
			})
		})
	}
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
	console.log("user",state)
    return {
    	userInfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
