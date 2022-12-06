/* eslint-disable no-unused-vars */
import {useContext} from 'react';

import {useTheme, Box, IconButton, InputBase} from '@mui/material';
import {
	LightModeOutlined,
	DarkModeOutlined,
	NotificationsOutlined,
	SettingsOutlined,
	PersonOutlined,
	Search
} from '@mui/icons-material';

import {ColorModeContext, tokens} from '../theme';

function Navbar() {
	const theme = useTheme(); // MUI theme object.
	const colors = tokens(theme.palette.mode); // colors is the color object we created by passing in the mode.
	const colorMode = useContext(ColorModeContext); // colorMode is an object holding memoized functions.

	return (
		<Box sx={{p: 2, display: 'flex', justifyContent: 'space-between'}}>
			{/* Search Bar */}
			<Box sx={{display: 'flex', background: colors.primary[400], borderRadius: '3px'}}>
				<InputBase sx={{ml: 2, flex: 1}} placeholder='Search' />
				<IconButton type='button' sx={{p: 1}}>
					<Search />
				</IconButton>
			</Box>

			{/* Icons */}
			<Box sx={{display: 'flex'}}>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
				</IconButton>
				<IconButton>
					<NotificationsOutlined />
				</IconButton>
				<IconButton>
					<SettingsOutlined />
				</IconButton>
				<IconButton>
					<PersonOutlined />
				</IconButton>
			</Box>
		</Box>
	);
}

export default Navbar;
