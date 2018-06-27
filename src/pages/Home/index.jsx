import React, {Component} from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../redux/actions/userInfo' 
import Header from "../../components/HomeHeader";
import Category from "../../components/Category";
import Ad from "./subPages/Ad"
import List from "./subPages/List"
require("./index.less")
class Home extends Component {
	render() {
		return (
			<div>
				<Header cityName={this.props.userInfo.cityName} />
				<Category />
				<Ad />
				<List cityName={this.props.userInfo.cityName}/>
			</div>
		)
	}

	componentDidMount() {
		// console.log(this.props.userInfo)
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
)(Home)