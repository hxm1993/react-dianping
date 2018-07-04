import React, {Component} from "react";
require("./index.less")
class Header extends Component {
	render() {
		return(
			<div className="myHeader">
				<i className="icon icon-chevron-left float-left" onClick={this.returnHandle.bind(this)}></i>
				<div className="title">{this.props.title}</div>
			</div>
		)
	}
	returnHandle() {
		window.history.back();
	}

	componentDidMount() {
		console.log("//////////////////////")
		console.log(this)

	}
}

export default Header;