import React, {Component} from "react";
import Header from "../../components/Header";
import * as fetch from "../../fetch/detail";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as storeActionsFromOtherFile from '../../redux/actions/store' 
import DetailInfo from "./subPages/DetailInfo";
import List from "./subPages/List"
import Operation from "./subPages/Operation"
require("./index.less")
class Detail extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
        	id: "",
            data: null,
            comment: [],
            hasMore: false,
            isFavorite: false
        }
    }

	render() {
		console.log(123, this.props.store)
		return (
			<div>
				<Header title="商品详情" />
				{
					this.state.data
					?
					<div>
						<DetailInfo data={this.state.data}/>
						<Operation 
							id = {this.state.id}
							isFavorite = {this.state.isFavorite}
							favoriteHandle = {this.favoriteHandle.bind(this)}
							buyHandle = {this.buyHandle.bind(this)}
						/>
						<List 
							hasMore={this.state.hasMore}
							comment={this.state.comment} 
							loadMoreFn = {this.loadMoreFn.bind(this)}
						/>
					</div>
					:
					<div>加载中...</div>
				}
			</div>
		)
	}

	componentDidMount() {
		//传递过来的id
		let id = this.props.match.params.id;
		this.setState({
			id: id
		})
		console.log(this.props.match.params.id)

		this.loadInfo(id);

		this.loadComment(id);

		let resultArr = this.props.store.length && this.props.store.filter(item => {
        	return item.id === this.state.id;
        })
        this.setState({
			isFavorite: resultArr && resultArr.length ? true : false
		})
        
	}

	loadInfo(id) {
		let result = fetch.getDetail(id);
		result.then(res => {
			return res.json()
		}).then(jsonData => {
			this.setState({
				data: jsonData
			})
		})	
		console.log(fetch.getDetail(id))
	}

	loadComment(id) {
		let comment = fetch.getComment(id);
		comment.then(res=> {
			return res.json();
		}).then(jsonData => {
			this.setState({
				comment: this.state.comment.concat(jsonData.data),
				hasMore: jsonData.hasMore
			})
		})
	}

	loadMoreFn() {
		this.loadComment(this.state.id)
	}

	//判断是否登录了
	isLogin() {
		if(!this.props.userInfo.username) {
			return false;
		}
		return true;
	}

	//收藏功能
	favoriteHandle(flag) {
		if(!this.isLogin()) {
			this.props.history.push("/login/"+encodeURIComponent('detail/' + this.state.id))
			return false;
		}
		
		if(flag === "add") {
			//实现收藏功能
			this.props.userInfoActions.add({id:this.state.id});
			this.setState({
				isFavorite: true
			})
		}else {
			//实现取消收藏功能
			this.props.userInfoActions.remove({id:this.state.id});
			this.setState({
				isFavorite: false
			})
		}
	}

	buyHandle() {
		if(!this.isLogin()) {
			this.props.history.push("/login/"+encodeURIComponent('detail/' + this.state.id))
			return false;
		}
		alert("购买啦")
	}
}


function mapStateToProps(state) {
	console.log(2222, state)
    return {
    	userInfo: state.userinfo,
    	store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	userInfoActions: bindActionCreators(storeActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)
