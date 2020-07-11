import React from 'react';

class SongTile extends React.Component {
	constructor(props) {
		super(props);
		this.imageSrc = this.props.imageSrc;
	}

	render() {
		return <img id='image' src={this.imageSrc} />;
	}
}

export default SongTile;
