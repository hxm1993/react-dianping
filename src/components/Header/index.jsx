import React, {Component} from "react";
require("./index.less")
class Header extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
	render() {
		return(
			<div className="myHeader">
				<i className="icon icon-chevron-left float-left" onClick={this.returnHandle.bind(this)}></i>
				<div className="title">{this.props.title}</div>
			</div>
		)
	}
	returnHandle() {
		if(this.props.formAddress) {
			this.props.history.push("/home")
		}else {
			window.history.back();
		}
	}

	componentDidMount() {
		console.log(this)

	}
}

export default Header;