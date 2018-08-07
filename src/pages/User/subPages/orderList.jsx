import React, {Component} from "react";

class OrderList extends Component {
	renderList() {
		let listDoms = [];
		let lists = this.props.lists;
		lists.forEach(list => {
			listDoms.push(
				<div className="list-item clear-fix">
                    <div className="item-img-container float-left">
                        <img src={list.img} alt={list.title}/>
                    </div>
                    <div className="item-content">
                        <p className="sellerName">商户： {list.title}</p>
                        <p>数量： {list.count}</p>
                        <p>价格： {list.price}</p>
                    </div>
                    <div className="pingjia">
                    	评价
                    </div>
            	</div>
			)
		})	
		return listDoms;
	}
	render() {
		let lists = this.renderList();
		return (
			<div>
				{lists}
			</div>
		)
	}
}

export default OrderList