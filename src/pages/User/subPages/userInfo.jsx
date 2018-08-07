import React, {Component} from "react";

class UserInfo extends Component {
	render() {
		return (
			<div className="userInfo">
				<p>用户名：{this.props.userName}</p>
				<p>地址：{this.props.userCity}</p>
			</div>
		)
	}
}

export default UserInfo