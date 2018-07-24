import React, {Component} from "react";

class Operation extends Component {
	render() {
		return(
			<div className="operation clear-fix">
				<a className="favorite had float-left" href="javascript:;" onClick={this.props.favoriteHandle}>收藏</a>
				<a className="buy float-right" href="javascript:;" onClick={this.props.buyHandle}>购买</a>
			</div>
		)
	}
}

export default Operation;