import React, {Component} from "react";
import { Link } from 'react-router-dom'
import SearchInput from "../SearchInput";
require("./index.less")

class Header extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return(
			<div className="header clear-fix">
				
				<Link to="/city" className="header_left">
					<div>{this.props.cityName}<i className="icon-angle-down"></i>  </div>
				</Link>
				<SearchInput value="asd" enterHandle={this.enterHandle.bind(this)}/>
				<div className="header_right">
					<i className="icon-user"></i>
				</div>
			</div>
		)
	}

	enterHandle(value) {
		console.log(this)
				// this.props.jumpPage()
		 this.props.history.push('/search/all/'+value)
	}
}

export default Header;