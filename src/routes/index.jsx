import React, {Component} from "react";
import {HashRouter as Router, Route, Switch, Link} from "react-router-dom";

import Root from "../pages/Root"
import Home from "../pages/Home"

const getRoutes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Root}></Route>
			</Switch>
			
		</Router>
	)
	
}

export default getRoutes;