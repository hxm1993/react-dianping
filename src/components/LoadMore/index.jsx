import React, {Component} from "react";
require("./index.less")
class LoadMore extends Component {
	render() {
		return(
			<div ref="wrapper" className="loadMore">
				{
					this.props.isLoadingMore
					?
					<div>加载中...</div>
					:
					<div>加载更多</div>
				}
			</div>
		)
	}
	
	componentDidMount() {
		let _this = this;
		let timerId = null;
		function callback(){
			let wrapper = _this.refs.wrapper;
			let top = wrapper.getBoundingClientRect().top;
			let screenHeight = window.screen.height;
			if(top < screenHeight) {
				//加载更多已经出现
				_this.props.loadMoreFn();
			}
		}
		window.addEventListener("scroll",function() {
			if(this.props.isLoadingMore) {
				return
			}
			if(timerId) {
				clearTimeout(timerId)
			}
			timerId = setTimeout(function() {
				callback()
			}, 50)
		}.bind(this))
	}

}

export default LoadMore;