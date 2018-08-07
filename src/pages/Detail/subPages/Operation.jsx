import React, {Component} from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class Operation extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        // this.state = {
        //     favorited: false
        // }
        // console.log(123, this.props)
    }
	render() {
		return(
			<div className="operation clear-fix">
				{
					this.props.isFavorite
					?
					<a className="favorite float-left" href="javascript:;" onClick={this.storeHandle.bind(this,"remove")}>已收藏</a>
					:
					<a className="favorite had float-left" href="javascript:;" onClick={this.storeHandle.bind(this,"add")}>收藏</a>
				}
				
				<a className="buy float-right" href="javascript:;" onClick={this.props.buyHandle}>购买</a>
			</div>
		)
	}

	storeHandle(flag) {
		this.props.favoriteHandle(flag)
		// if(this.state.favorited) {
		// 	this.state.favorited = false;
		// 	this.props.userInfoActions.remove(this.props.id);
		// }else {
		// 	this.state.favorited = true;
		// 	this.props.userInfoActions.add(this.props.id)
		// }
		// alert(this.state.favorited)
		
	}

}


export default Operation;