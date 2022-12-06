import {CssBaseline, ThemeProvider} from '@mui/material';

import {ColorModeContext, useMode} from './theme';

function App() {
	const [theme, colorMode] = useMode();

	return (
		// Our created context.
		<ColorModeContext.Provider value={colorMode}>
			{/* MUI's context for its theme */}
			<ThemeProvider theme={theme}>
				{/* MUI's built-in CSS reset */}
				<CssBaseline />
				<div className='app'>
					<main className='content'></main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
