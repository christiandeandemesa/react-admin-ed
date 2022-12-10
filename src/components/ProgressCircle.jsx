import {useTheme, Box} from '@mui/material';

import {tokens} from '../theme';

function ProgressCircle({progress = 0.75, size = '40'}) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const angle = progress * 360;

	return (
		<Box
			sx={{
				width: `${size}px`,
				height: `${size}px`,
				// Conic-gradient creates a circle that looks like a pie chart, and radial-gradient makes the center of it transparent.
				background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, ${colors.redAccent[500]} ${angle}deg 360deg), ${colors.greenAccent[500]}`,
				borderRadius: '50%'
			}}
		/>
	);
}

export default ProgressCircle;
