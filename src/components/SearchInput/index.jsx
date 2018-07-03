import React, {Component} from "react";
require("./index.less")
class SearchInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: ""
		}
	}
	render() {
		return(
			<div className="header_middle">
					
					<input 
						class="search_input" 
						id="search_keyword" 
						value={this.state.value}
						onChange = {this.changeHandle.bind(this)}
						onKeyUp = {this.keyUpHandle.bind(this)}
					/>
					<i className="icon-search"></i>
				</div>
			
		)
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.value
		})
	}


	changeHandle(e) {
		this.setState({
			value: e.target.value
		})
	}

	keyUpHandle(e) {
		if(e.keyCode != 13) {
			return;
		}
		this.props.enterHandle(e.target.value)
	}
}

export default SearchInput;