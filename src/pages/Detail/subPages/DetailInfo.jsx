import React, {Component} from "react";

class DetainInfo extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			data: false
		}
	}
	render() {
		let data = this.state.data;
		console.log(data)
		return (
			<div className="detailInfo">
				<div className="detailInfo_top clear-fix">
					<img className="float-left" src={data.img} alt={data.title}/>
					<div className="float-left titleBox">
						<h3 className="title">{data.title}</h3>
						<div className="evaluate">
							<span>start</span>
							<span>1</span>
						</div>
						<div className="subTitle">
							{data.subTitle}
						</div>
					</div>
				</div>
				<div className="detailInfo_bottom" dangerouslySetInnerHTML={{__html: data.desc}}>
					
				</div>
			</div>
		)
	}
	componentDidMount() {
		this.setState({
			data: this.props.data
		})
	}
}

export default DetainInfo;