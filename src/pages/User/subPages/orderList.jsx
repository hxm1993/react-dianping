import React, {Component} from "react";
import Item from "./item"
class OrderList extends Component {
	renderList() {
		let listDoms = [];
		let lists = this.props.lists;
		lists.forEach(list => {
			listDoms.push(
				
			)
		})	
		return listDoms;
	}
	render() {
		console.log("lsits", this.props.lists)
		return (
			<div>
				{this.props.lists.map(list => {
					return <Item data={list}/>
				})}
			</div>
		)
	}
}

export default OrderList