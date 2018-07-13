import React, {Component} from "react";

class ListItem extends Component {
	render() {
		return(
			<div className="comment_list">
				{
					this.props.data.map((item,index) => {
						return (
							<div className="item">
								<div>
									<div className="username">{item.username}</div>
									<div className="user_comment">{item.comment}</div>
								</div>
							</div>
						)
					})	
				}
			</div>
			
		)
	}

	componentDidMount() {
		console.log(this.props.data)
	}
}

export default ListItem;