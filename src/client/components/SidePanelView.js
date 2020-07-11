import React from 'react';
import FastAverageColor from 'fast-average-color';
import SongTile from './SongTile';

const fac = new FastAverageColor();

class SidePanelView extends React.Component {
	constructor(props) {
		super(props);
		this.width = this.props.width;
	}

	async componentDidMount() {
		let color;
		try {
			color = await fac.getColorAsync(document.getElementById('image'));
			document.body.style.backgroundColor = color.rgba;
		} catch (e) {
			console.error(e);
		}
	}

	render() {
		return (
			<div id={this.props.componentId} style={{ width: this.width }} className='sidePanel'>
				<div>
					<SongTile imageSrc='/images/albums/beibs.jpg' />
				</div>
				<div class='songtile'>Manila Grey</div>
				<div class='songtile'>
					<img alt='Travis Scott Beibs in the trap' src='/images/albums/beibs.jpg'></img>
					Travis Bop
				</div>
				<div class='songtile'>Chelo</div>
			</div>
		);
	}
}
export default SidePanelView;
