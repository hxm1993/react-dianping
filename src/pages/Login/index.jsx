import React, {Component} from "react";
import Header from "../../components/Header";
import LoginComponent from "../../components/Login";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../redux/actions/userInfo' 
class Login extends Component {
	render(){
		return(
			<div>
				<Header title="登录页面"/>
				<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
			</div>
		)
	}

	loginHandle(username) {
		//保存用户名
		let userInfo = this.props.userInfo;
		userInfo.username = username;
		let userInfoActions = this.props.userInfoActions;
		userInfoActions.update(userInfo);

		//跳转到指定页面

		let goto = decodeURIComponent(this.props.match.params.goto);
		if(goto) {
			this.props.history.push("/" + goto)
		}else {
			this.props.history.push("/home")
		}

	}

	componentDidMount() {
		//如果用户名存在，则跳转到用户中心页面
		if(this.props.userInfo) {
			//跳转到用户中心页面
			this.props.history.replace()
		}
	}
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
	console.log(state)
    return {
    	userInfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)