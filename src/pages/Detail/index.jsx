import React, {Component} from "react";
import Header from "../../components/Header";
import * as fetch from "../../fetch/detail";
import DetailInfo from "./subPages/DetailInfo";
import List from "./subPages/List"
require("./index.less")
class Detail extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	id: "",
            data: null,
            comment: [],
            hasMore: false
        }
    }

	render() {
		console.log(this.state.comment)
		return (
			<div>
				<Header title="商品详情" />
				{
					this.state.data
					?
					<div>
						<DetailInfo data={this.state.data}/>
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
}

export default Detail;