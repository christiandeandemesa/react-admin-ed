import {Box} from '@mui/material';

import Header from '../components/Header';
import LineChart from '../components/LineChart';

function Line() {
	return (
		<Box sx={{m: '20px'}}>
			<Header title='LINE CHART' subtitle="Most Popular Product's Sales (2022)" />

			<Box sx={{height: '75vh'}}>
				<LineChart />
			</Box>
		</Box>
	);
}

export default Line;
