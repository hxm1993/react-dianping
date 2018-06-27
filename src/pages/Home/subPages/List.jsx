import React, {Component} from "react";
import * as fetch from "../../../fetch/home"
import ListComponent from "../../../components/List"
import LoadMore from "../../../components/LoadMore"

class List extends Component {

	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            page: 0,
            isLoadingMore: false
        }
    }

	render() {
		return (
			<div className="home-list">
				<div className="title">猜你喜欢</div>
				{

					this.state.data.length
					?
					<ListComponent data={this.state.data}></ListComponent>
					:
					<div>加载中...</div>
				}

				{
					this.state.hasMore
					?
					<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadData.bind(this)}/>
					:
					<div></div>
				}
			</div>
		)
	}

	componentDidMount() {
		
		this.loadData();
	}

	loadData() {
		this.setState({
			isLoadingMore: true
		})
		let cityName = this.props.cityName;
		const result = fetch.getList(cityName,this.state.page)
		result.then(res => {
			return res.json();
		}).then(jsonData => {
			this.setState({
				data: this.state.data.concat(jsonData.data),
				hasMore: jsonData.hasMore,
				isLoadingMore: false
			})
		})
		this.setState({
			page: this.state.page + 1
		})
	}
}

export default List;