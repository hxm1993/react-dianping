import React, {Component} from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../redux/actions/userInfo' 
import SearchHeader from "../../components/SearchHeader";
import List from "./subPages/List"
class Search extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: "aaa"
		}
	}
	render() {

		return(
			<div>
				<SearchHeader value={this.state.value}/>
				<List 
					cityName={this.props.userInfo.cityName}
					keyword = {this.state.value}
				/>
			</div>
		)
	}
	componentDidMount() {
		this.setState({
			value: this.props.match.params.keyword
		})
	}
}

function mapStateToProps(state) {
    return {
    	userInfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
