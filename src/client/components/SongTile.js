import React from 'react';

class SongTile extends React.Component {
	constructor(props) {
		super(props);
		this.imageSrc = this.props.imageSrc;
		this.artistName = null;
		this.albumName = null;
		this.songTitle = null;
	}

	render() {
		return (
			<>
				<div className='songTile'>
					<img className='songTileImage' src={this.imageSrc} />
					<div className='songTile_songTitle'>{this.props.songTitle}</div>
				</div>
			</>
		);
	}
}

export default SongTile;
