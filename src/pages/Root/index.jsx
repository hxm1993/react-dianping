import React, {Component} from "react";
import {HashRouter as Router, Route, Switch, Link} from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../redux/actions/userInfo' 
import LocalStore from "../../util/localStore"
import Home from "../Home"
import {CITYNAME} from "../../config/localStorageKey"
class Root extends Component {
	render() {
		return(
			<div>
				<Route path="/home" component={Home}></Route>
			</div>
		)
	}
	componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME) || "北京"
        this.props.userInfoActions.update({
            cityName : cityName
        })
    }
}


// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)