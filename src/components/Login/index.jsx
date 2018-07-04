import React, {Component} from "react";
require("./index.less")
class Login extends Component {
	constructor(props,context) {
		super(props, context);
		this.state = {
			phone: '',
			key: '',
			sendKey: ''
		}
	}
	render(){
		return(
			<div className="login">
				<div className="phone">
					<i className="icon-phone"></i>
					<input 
						type="text"
						value={this.state.phone}
						onChange={this.changeHandle.bind(this,"phone")}
					/>
				</div>
				<div className="key clear-fix">
					<i className="icon-key"></i>
					<input 
						type="text" 
						className="float-left"
						value={this.state.key}
						onChange={this.changeHandle.bind(this,"key")}
					/>
					<button className="sendKey float-right" onClick={this.sendKeyHandle.bind(this)}>发送验证码</button>
				</div>
				<button className="loginBtn" onClick={this.submitHandle.bind(this)}>登录</button>
			</div>
		)
	}

	changeHandle(key,e) {
		var obj = {};
		obj[key] = e.target.value;
		this.setState(obj)
	}

	sendKeyHandle() {
		var key = "";
		for(var i = 0; i < 4; i++) {
			key += Math.floor(Math.random() * 10);
		}
		this.setState({
			sendKey: key
		})
		console.log(key)
	}

	submitHandle() {
		//验证码不通过
		if(this.state.key === '') {
			alert('验证码不能为空')
			return;
		}
		// if(this.state.key !== this.state.sendKey) {
		// 	alert('验证码错误')
		// 	return;
		// }

		alert('登录成功')
		console.log(this.state.phone)
		let username = this.state.phone;
		this.props.loginHandle(username);
	}
}

export default Login;