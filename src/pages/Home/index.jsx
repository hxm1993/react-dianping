import React, {Component} from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../redux/actions/userInfo' 
import Header from "../../components/Header";
import Category from "../../components/Category";
import Ad from "./subPages/Ad"
class Home extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<Header cityName={this.props.userInfo.cityName} />
				<Category />
				<Ad />
				<img src="https://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png" alt=""/>
			</div>
		)
	}

	componentDidMount() {
		console.log(this.props.userInfo)
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