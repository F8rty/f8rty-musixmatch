import React from 'react';

import './App.css';
import F8RTYMusicPlayer from './client/components/F8RTYMusicPlayer';
import ErrorHandler from './client/devComponents/ErrorHandler';

function App() {
	const sidePanelMinWidth = 30;

	return (
		<ErrorHandler>
			<F8RTYMusicPlayer sidePanelMinWidth={sidePanelMinWidth} componentId='48MusicPlayer' />
		</ErrorHandler>
	);
}

export default App;
