import React, {Component} from "react";

require("./index.less")

class Header extends Component {
	render() {
		return(
			<div className="header clear-fix">
				<div className="header_left float-left">{this.props.cityName}<i className="icon-angle-down"></i>  </div>
				<div className="header_middle float-left">
					<input type="search"/>
					<i className="icon-search"></i>
				</div>
				<div className="header_right float-right">
					<i className="icon-user"></i>
				</div>
			</div>
		)
	}
}

export default Header;