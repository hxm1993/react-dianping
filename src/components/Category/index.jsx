import React, {Component} from "react";
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom';
require("./index.less")

class Category extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
	render() {
		const opt = {
			continuous: true,
			auto : 2000,
			callback: function(index) {
				console.log(index)
				this.setState({
					index: index
				})
			}.bind(this)
		}

		return(
			<div className="category">
				<div className="category_item">
					<ReactSwipe className="carousel" swipeOptions={opt}>
		                <ul className="clear-fix">
								<Link to="/search/景点" ><li className="float-left jingdian">景点</li></Link>
	                            <li className="float-left ktv">KTV</li>
	                            <li className="float-left gouwu">购物</li>
	                            <li className="float-left shenghuofuwu">生活服务</li>
	                            <li className="float-left jianshenyundong">健身运动</li>
	                            <li className="float-left meifa">美发</li>
	                            <li className="float-left qinzi">亲子</li>
	                            <li className="float-left xiaochikuaican">小吃快餐</li>
	                            <li className="float-left zizhucan">自助餐</li>
	                            <li className="float-left jiuba">酒吧</li>
						</ul>
		                <ul className="clear-fix">
                            <li className="float-left meishi">美食</li>
                            <li className="float-left dianying">电影</li>
                            <li className="float-left jiudian">酒店</li>
                            <li className="float-left xuixianyule">休闲娱乐</li>
                            <li className="float-left waimai">外卖</li>
                            <li className="float-left huoguo">火锅</li>
                            <li className="float-left liren">丽人</li>
                            <li className="float-left dujiachuxing">度假出行</li>
                            <li className="float-left zuliaoanmo">足疗按摩</li>
                            <li className="float-left zhoubianyou">周边游</li>
                        </ul>
                        <ul className="clear-fix">
                            <li className="float-left ribencai">日本菜</li>
                            <li className="float-left SPA">SPA</li>
                            <li className="float-left jiehun">结婚</li>
                            <li className="float-left xuexipeixun">学习培训</li>
                            <li className="float-left xican">西餐</li>
                            <li className="float-left huochejipiao">火车机票</li>
                            <li className="float-left shaokao">烧烤</li>
                            <li className="float-left jiazhuang">家装</li>
                            <li className="float-left chongwu">宠物</li>
                            <li className="float-left quanbufenlei">全部分类</li>
                        </ul>
		            </ReactSwipe>
		            <div className="swipe_index">
		            	<ul>
		            		<li className={this.state.index === 0 ? "active" : ""}></li>
		            		<li className={this.state.index === 1 ? "active" : ""}></li>
		            		<li className={this.state.index === 2 ? "active" : ""}></li>
		            	</ul>
		            </div>
				</div>
		
			</div>
		)
	}
}

export default Category;