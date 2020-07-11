import React from 'react';
import "../stylesheets/SidePanelView.css";

function SidePanelView(props) {
	return (
		<>
			<div id="sidePanelContainer" style={{ minWidth: props.minWidth, maxWidth: props.maxWidth }} className="sidenav">

				<div class="songtile">
					Manila Grey

					</div>
				<div class="songtile">
					<img alt="Travis Scott Beibs in the trap" src="/images/albums/beibs.jpg"></img>
						Travis Bop
					</div>
				<div class="songtile">
					Chelo
					</div>

			</div>
		</>
	);
}
export default SidePanelView;