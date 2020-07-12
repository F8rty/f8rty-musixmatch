import React from 'react';
import SongTile from './SongTile';

class SidePanelView extends React.Component {
	constructor(props) {
		super(props);
		this.width = this.props.width;
	}

	render() {
		return (
			<div id={this.props.componentId} style={{ width: this.width }} className='sidePanel'>
				{/* 

					let dataFromDatabase = sql.getData('songs')
					const dataSource = parseIntoJsArray(dataFromDatabase);
					
					dataSource.map((data) => {
						<SongTile imageSrc = data.pathToImage songTitle = data.songTitle etc.../>
					})

				*/}
				<SongTile
					componentId='tbop1'
					songTitle='Travis Bop'
					imageSrc='/images/albums/beibs.jpg'
				/>
				<SongTile
					componentId='loona1'
					songTitle='Butterfly'
					imageSrc='/images/albums/loona.jpg'
				/>
				<SongTile
					componentId='tbop3'
					songTitle='Travis Bop #3'
					imageSrc='/images/albums/beibs.jpg'
				/>
			</div>
		);
	}
}
export default SidePanelView;
