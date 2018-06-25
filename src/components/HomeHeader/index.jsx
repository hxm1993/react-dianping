import React, {Component} from "react";
import { Link } from 'react-router-dom'
require("./index.less")

class Header extends Component {
	render() {
		return(
			<div className="header clear-fix">
				
				<Link to="/city" className="header_left">
					<div>{this.props.cityName}<i className="icon-angle-down"></i>  </div>
				</Link>
				<div className="header_middle">
					<input type="search"/>
					<i className="icon-search"></i>
				</div>
				<div className="header_right">
					<i className="icon-user"></i>
				</div>
			</div>
		)
	}
}

export default Header;