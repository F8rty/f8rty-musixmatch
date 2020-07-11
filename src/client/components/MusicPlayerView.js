import React from 'react';

function MusicPlayerView(props) {
	const marginLeft = props.sidePanelMinWidth + 'rem';
	return (
		<div id={props.componentId} className='musicPlayerView' style={{ marginLeft: marginLeft }}>
			<div>Music Player Area</div>

			{/* <footer className='footer clearfix' style={{ width: footerWidth }}>
				<div className='footerContainer'>
					<div className='leftButton'>Left</div>
					<div className='rightButton'>Right</div>
				</div>
			</footer> */}
		</div>
	);
}
export default MusicPlayerView;
