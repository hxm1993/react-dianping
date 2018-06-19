import React, {Component} from "react";
import {render} from "react-dom";
import {AppContainer} from 'react-hot-loader';
import {Provider} from "react-redux";
import store from "./redux";

import getRoutes from "./routes"
import "./static/css/common.less"
import "./static/css/font.css"

/*初始化*/
renderWithHotReload(getRoutes());

/*热更新*/
if (module.hot) {
    module.hot.accept('./routes', () => {
        const getRoutes = require('./routes').default;
        renderWithHotReload(getRoutes());
    });
}

function renderWithHotReload(element) {
	render(
		<AppContainer>
			<Provider store={store}>
				{element}
			</Provider>
		</AppContainer>,
		document.getElementById("app")
	)

}
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';