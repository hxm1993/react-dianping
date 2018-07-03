import React, {Component} from "react";
import SearchInput from "../SearchInput"
require("./index.less")
class SearchHeader extends Component {
	
	render() {
		return(
			<div className="searchHeader clear-fix">
				<i class="icon icon-chevron-left float-left" onClick={this.returnHandle.bind(this)}></i>
				<SearchInput value={this.props.value}/>
			</div>
		)
	}
	componentDidMount() {
	}
	returnHandle() {
		window.history.back();
	}
}

export default SearchHeader;