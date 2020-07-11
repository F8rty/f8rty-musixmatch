import React from 'react';
import MusicPlayerView from './MusicPlayerView';
import SidePanelView from './SidePanelView';
import '../stylesheets/F8RTYMusicPlayer.css';

const DEFAULT_SIDEPANEL_MINWIDTH = 33;

function F8RTYMusicPlayer(props) {
	let sidePanelMinWidth = DEFAULT_SIDEPANEL_MINWIDTH;

	if (props && props.sidePanelMinWidth) {
		if (validateProps(props)) sidePanelMinWidth = props.sidePanelMinWidth;
	}

	return (
		<div id={props.componentId}>
			<SidePanelView componentId='sidePanelView' width={sidePanelMinWidth + 'rem'} />
			<MusicPlayerView componentId='musicPlayerView' sidePanelMinWidth={sidePanelMinWidth} />
		</div>
	);
}

function validateProps(props) {
	if (props.sidePanelMinWidth < 15 || props.sidePanelMinWidth > 35) {
		throw new Error(
			'Current sidepanel width would result in bad UI. Please pick a value between 15 and 35 for optimal results.'
		);
	}
	return true;
}

export default F8RTYMusicPlayer;
