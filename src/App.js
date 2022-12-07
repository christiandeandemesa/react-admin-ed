/* eslint-disable no-unused-vars */
import {Routes, Route} from 'react-router-dom';

import {CssBaseline, ThemeProvider} from '@mui/material';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Contacts from './pages/Contacts';
import Invoices from './pages/Invoices';
import Form from './pages/Form';
import Calendar from './pages/Calendar';
import FAQ from './pages/FAQ';
import Bar from './pages/Bar';
import Line from './pages/Line';
import Pie from './pages/Pie';
import Geography from './pages/Geography';

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
					<Sidebar />
					<main className='content'>
						<Navbar />
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/team' element={<Team />} />
							<Route path='/contacts' element={<Contacts />} />
							<Route path='/invoices' element={<Invoices />} />
							<Route path='/form' element={<Form />} />
							<Route path='/calendar' element={<Calendar />} />
							<Route path='/faq' element={<FAQ />} />
							<Route path='/bar' element={<Bar />} />
							<Route path='/pie' element={<Pie />} />
							<Route path='/line' element={<Line />} />
							<Route path='/geography' element={<Geography />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
