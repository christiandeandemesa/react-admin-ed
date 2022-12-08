import {useTheme, Typography, Box} from '@mui/material';

import {tokens} from '../theme';

function Header({title, subtitle}) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box sx={{mb: '30px'}}>
			<Typography variant='h2' sx={{mb: '5px', color: colors.grey[100], fontWeight: 'bold'}}>
				{title}
			</Typography>
			<Typography variant='h5' sx={{color: colors.greenAccent[400]}}>
				{subtitle}
			</Typography>
		</Box>
	);
}

export default Header;
