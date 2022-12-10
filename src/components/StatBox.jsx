import {useTheme, Box, Typography} from '@mui/material';

import ProgressCircle from './ProgressCircle';

import {tokens} from '../theme';

function StatBox({title, subtitle, icon, progress, increase}) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box sx={{width: '100%', m: '0 30px'}}>
			<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Box>
					{icon}
					<Typography variant='h4' sx={{color: colors.grey[100], fontWeight: 'bold'}}>
						{title}
					</Typography>
				</Box>
				<Box>
					<ProgressCircle progress={progress} />
				</Box>
			</Box>
			<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Typography variant='h5' sx={{color: colors.greenAccent[500]}}>
					{subtitle}
				</Typography>
				<Typography variant='h5' sx={{color: colors.greenAccent[600], fontStyle: 'italic'}}>
					{increase}
				</Typography>
			</Box>
		</Box>
	);
}

export default StatBox;
