import {CssBaseline, ThemeProvider} from '@mui/material';

import Navbar from './components/Navbar';

import {ColorModeContext, useMode} from './theme';

function App() {
	const [theme, colorMode] = useMode();

	return (
		// Our created context with the mode, and both memoized functions.
		<ColorModeContext.Provider value={colorMode}>
			{/* MUI's context for its theme */}
			<ThemeProvider theme={theme}>
				{/* MUI's built-in CSS reset */}
				<CssBaseline />
				<div className='app'>
					<main className='content'>
						<Navbar />
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
