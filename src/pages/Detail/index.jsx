import React, {Component} from "react";

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
				detail
			</div>
		)
	}

	componentDidMount() {
		//传递过来的id
		let id = this.props.match.params.id;
		console.log(this.props.match.params.id)
	}
}

export default Detail;