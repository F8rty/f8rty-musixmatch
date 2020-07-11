import React from 'react';
import MusicPlayerView from './MusicPlayerView';
import SidePanelView from './SidePanelView';
import '../stylesheets/F8RTYMusicPlayer.css'


const DEFAULT_SIDEPANEL_WIDTH = "33%";

function F8RTYMusicPlayer(props) {

	validateProps(props);

	return (
		<div className='container'>
			<SidePanelView minWidth = {props.sidePanelMinWidth + "rem"} />	
			<MusicPlayerView />
		</div>
	);
}

function validateProps(props){
	
	// if(props.sidePanelWidth + props.musicPanelWidth !== 100){
	// 	throw new Error("Music player widths do not add up to 100");
	// }
}


export default F8RTYMusicPlayer;