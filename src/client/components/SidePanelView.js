import React from 'react';
import "../stylesheets/SidePanelView.css";

function SidePanelView(props) {
	return (
		<>
			<div id = "sidePanelContainer" style = {{minWidth: props.minWidth, maxWidth: props.maxWidth}} className = "sidenav">
				<div>
					This is the side panel view.
				</div>
			</div>
		</>
	);
}
export default SidePanelView;