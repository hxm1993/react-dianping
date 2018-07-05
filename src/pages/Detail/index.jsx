import React, {Component} from "react";
import Header from "../../components/Header";
import * as fetch from "../../fetch/detail";

class Detail extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: null
        }
    }

	render() {
		return (
			<div>
				<Header title="商品详情" />
				{
					this.state.data
					?
					<div>{this.state.data.id}</div>
					:
					<div>加载中</div>
				}
			</div>
		)
	}

	componentDidMount() {
		//传递过来的id
		let id = this.props.match.params.id;
		console.log(this.props.match.params.id)

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
}

export default Detail;