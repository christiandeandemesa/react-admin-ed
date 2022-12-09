import {Box} from '@mui/material';

import Header from '../components/Header';
import PieChart from '../components/PieChart';

function Pie() {
	return (
		<Box sx={{m: '20px'}}>
			<Header title='PIE CHART' subtitle="Each Product's Sales Across the US" />

			<Box sx={{height: '75vh'}}>
				<PieChart />
			</Box>
		</Box>
	);
}

export default Pie;
