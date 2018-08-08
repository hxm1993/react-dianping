import React, {Component} from "react";
import {postComment} from "../../../fetch/order";
class Item extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 0 // 0 未评价   1评价中     2已评价
        }
    }
	render() {
        let list = this.props.data;
		return (
			<div className="list-item clear-fix">
                    <div className="item-img-container float-left">
                        <img src={list.img} alt={list.title}/>
                    </div>
                    <div className="item-content">
                        <p className="sellerName">商户： {list.title}</p>
                        <p>数量： {list.count}</p>
                        <p>价格： {list.price}</p>
                    </div>

                    {
                        this.state.commentState === 0
                        ?
                        //未评价
                        <div className="pingjia" onClick={this.appraise.bind(this)}>
                            评价
                        </div>
                        :
                            this.state.commentState === 1 
                            ?
                            //评价中
                            <div>
                                <textarea ref="commentText" className="contentBox" name="" id="" cols="20" rows="5"></textarea>
                                <div className="operationBtn">
                                    <button className="ok" onClick={this.sendEstimate.bind(this)}>确定</button>
                                    <button className="cancel" onClick={this.cancelEstimate.bind(this)}>取消</button>
                                </div>
                            </div>
                            :
                            <div className="pingjia finish">
                                已评价
                            </div>


                    }
                    
            </div>
		)
	}
    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }
    appraise() {
        this.setState({
            commentState: 1
        })
    }
    sendEstimate() {
        // this.setState({
        //     commentState: 2
        // })
        let id = this.props.data.id;
        let commentDom = this.refs.commentText;
        console.log('aaaaa', commentDom)
        let comment = commentDom.value;
        let result = postComment(id, comment);
        result.then(res => {
            return res.json()
        }).then(json => {
            if(json.errno === 0) {
                this.changeState();
            }
        })

    }
    changeState() {
        this.setState({
            commentState: 2
        })
    }
    cancelEstimate() {
        this.setState({
            commentState: 0
        })
    }
}

export default Item;