import React, {Component} from "react";
import * as fetch from "../../../fetch/home"

class Ad extends Component {
	constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	ads: null
        }
    }

	render() {
		return(
			<div className="homeAds">
				<div className="title">超值特惠</div>
				<div className="clear-fix ad-box">
					{this.state.ads && this.state.ads.map((item, index) => {
                        return (
							<div key={index} className="ad-item float-left">
	                            <a href={item.link} target="_blank">
	                                <img src={item.img} alt={item.title}/>
	                            </a>
	                        </div>
                        )
                    })}
				</div>
			</div>
		)
	}
	
	componentDidMount() {
		const result = fetch.getAdMsg()
		result.then(res => {
			return res.json();
		}).then(jsonData => {
			if(jsonData.length) {
				this.setState({
					ads: jsonData
				})
			}
		})
	}
}

export default Ad;