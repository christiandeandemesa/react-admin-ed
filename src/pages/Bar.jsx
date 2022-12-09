import {Box} from '@mui/material';

import Header from '../components/Header';
import BarChart from '../components/BarChart';

function Bar() {
	return (
		<Box sx={{m: '20px'}}>
			<Header title='BAR CHART' subtitle="Each Product's Sales By State" />

			<Box sx={{height: '75vh'}}>
				<BarChart />
			</Box>
		</Box>
	);
}

export default Bar;
