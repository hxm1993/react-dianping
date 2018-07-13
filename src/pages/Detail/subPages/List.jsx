import React, {Component} from "react";
import ListItem from "./ListItem";
import LoadMore from "../../../components/LoadMore";
import * as fetch from "../../../fetch/detail";

class List extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore: false,
            isLoadingMore: false
        }
    }

	render() {
		return(
			<div className="comment">
				<div className="title">用户点评</div>
				{
					this.props.comment
					?
					<ListItem data={this.props.comment}/>
					:
					<div>加载中...</div>
				}
				{
					this.state.hasMore
					?
					<LoadMore 
						isLoadingMore={this.state.isLoadingMore}
						loadMoreFn = {this.props.loadMoreFn}
					/>
					:
					<div></div>
				}
			</div>
		)
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			hasMore: nextProps.comment.hasMore,
			isLoadingMore: nextProps.isLoadingMore,
			hasMore: nextProps.hasMore
		})
	}
	componentDidMount() {
		
	}
}

export default List;