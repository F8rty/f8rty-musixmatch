import React from 'react';
import FastAverageColor from 'fast-average-color';

const fac = new FastAverageColor();

class SongTile extends React.Component {
	constructor(props) {
		super(props);
		this.componentId = this.props.componentId;
		this.imageSrc = this.props.imageSrc;
		this.artistName = null;
		this.albumName = null;
		this.songTitle = null;
	}

	async componentDidMount() {
		let color;
		try {
			//ideally this would be saved in the database
			color = await fac.getColorAsync(this.imageSrc);
			document.getElementById(this.componentId).style.backgroundColor = color.rgba || '#03DAC6';
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<>
				<div id={this.componentId} className='songTile'>
					<img alt='Song Tile' className='songTileImage' src={this.imageSrc} />
				</div>
			</>
		);
	}
}

export default SongTile;
