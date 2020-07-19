import React from 'react';
import { Helmet } from "react-helmet";



class MusicPlayerView extends React.Component {

	constructor(props) {
		super(props);
		this.marginLeft = props.sidePanelMinWidth + 'rem';
	}
	componentDidMount() {
		const script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/shaka-player/3.0.1/shaka-player.ui.js";
		script.async = true;
		document.body.appendChild(script);
	}


	async init() {
		let manifestUri =
			'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

		// When using the UI, the player is made automatically by the UI object.
		const video = document.getElementById('video');
		const ui = video['ui'];
		const controls = ui.getControls();
		const player = controls.getPlayer();

		// Attach player and ui to the window to make it easy to access in the JS console.
		window.player = player;
		window.ui = ui;

		// Listen for error events.
		player.addEventListener('error', MusicPlayerView.onPlayerErrorEvent);
		controls.addEventListener('error', MusicPlayerView.onUIErrorEvent);

		// Try to load a manifest.
		// This is an asynchronous process.
		try {
			await player.load(manifestUri);
			// This runs if the asynchronous load is successful.
			console.log('The video has now been loaded!');
		} catch (error) {
			MusicPlayerView.onPlayerError(error);
		}
	}

	onPlayerErrorEvent(errorEvent) {
		// Extract the shaka.util.Error object from the event.
		//MusicPlayerView.onPlayerError(event.detail);
	}

	onPlayerError(error) {
		// Handle player error
		console.error('Error code', error.code, 'object', error);
	}

	onUIErrorEvent(errorEvent) {
		// Extract the shaka.util.Error object from the event.
		//MusicPlayerView.onPlayerError(event.detail);
	}

	initFailed() {
		// Handle the failure to load
		console.error('Unable to load the UI library!');
	}

	// Listen to the custom shaka-ui-loaded event, to wait until the UI is loaded.
	componenetDidMount() {
		document.addEventListener('shaka-ui-loaded', MusicPlayerView.init);
		document.addEventListener('shaka-ui-load-failed', MusicPlayerView.initFailed);
	}

	// Listen to the custom shaka-ui-load-failed event, in case Shaka Player fails
	// to load (e.g. due to lack of browser support).



	render() {

		return (


			<div id={this.props.componentId} className='musicPlayerView' style={{ marginLeft: this.marginLeft }}>
				<div>Music Player Area</div>

				{/* <footer className='footer clearfix' style={{ width: footerWidth }}>
				<div className='footerContainer'>
					<div className='leftButton'>Left</div>
					<div className='rightButton'>Right</div>
				</div>
			</footer> */}


				<video id="video" src='/audio/beibs.mp3'

					controls autoplay></video>
			</div >
		);


	}

}

export default MusicPlayerView;
