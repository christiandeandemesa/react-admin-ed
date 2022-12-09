import {useState} from 'react';
import {Link} from 'react-router-dom';

import {Sidebar as ProSidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';

import {useTheme, Box, Typography} from '@mui/material';
import {
	Home,
	Folder,
	PeopleOutlined,
	ShoppingCartOutlined,
	ReceiptOutlined,
	Bookmark,
	PersonOutlined,
	CalendarTodayOutlined,
	HelpOutlineOutlined,
	BubbleChart,
	BarChartOutlined,
	PieChartOutlineOutlined,
	TimelineOutlined,
	MenuOutlined,
	MapOutlined
} from '@mui/icons-material';

import {tokens} from '../theme';

function Sidebar() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const [selected, setSelected] = useState('Dashboard');

	const {collapseSidebar} = useProSidebar();

	return (
		<ProSidebar
			defaultCollapsed
			backgroundColor={colors.primary[400]}
			rootStyles={{
				margin: '15px 0 15px 15px'
			}}
		>
			<Menu
				menuItemStyles={{
					// eslint-disable-next-line consistent-return
					button: ({level, active}) => {
						if (level === 0)
							return {
								color: active ? '#6870fa' : colors.grey[100],
								backgroundColor: colors.primary[400],
								'&:hover': {
									color: active ? '#6870fa' : colors.grey[100],
									backgroundColor: colors.primary[400]
								}
							};
						if (level === 1)
							return {
								color: active ? '#6870fa' : colors.grey[100],
								backgroundColor: colors.primary[400],
								'&:hover': {
									color: active ? '#6870fa' : '#868dfb',
									backgroundColor: colors.primary[400]
								}
							};
					}
				}}
			>
				{/* Admin */}
				<MenuItem onClick={() => collapseSidebar()} icon={<MenuOutlined />}>
					<Box
						sx={{
							ml: '15px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Typography variant='h3'>ADMIN</Typography>
					</Box>
				</MenuItem>

				{/* Dashboard */}
				{selected === 'Dashboard' ? (
					<MenuItem
						active
						onClick={() => setSelected('Dashboard')}
						routerLink={<Link to='/' />}
						icon={<Home />}
					>
						{' '}
						Dashboard{' '}
					</MenuItem>
				) : (
					<MenuItem
						onClick={() => setSelected('Dashboard')}
						routerLink={<Link to='/' />}
						icon={<Home />}
					>
						{' '}
						Dashboard{' '}
					</MenuItem>
				)}

				{/* Data */}
				<SubMenu icon={<Folder />} label='Data'>
					{selected === 'Users' ? (
						<MenuItem
							active
							onClick={() => setSelected('Users')}
							routerLink={<Link to='/users' />}
							icon={<PeopleOutlined />}
						>
							{' '}
							Users{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Users')}
							routerLink={<Link to='/users' />}
							icon={<PeopleOutlined />}
						>
							{' '}
							Users{' '}
						</MenuItem>
					)}

					{selected === 'Products' ? (
						<MenuItem
							active
							onClick={() => setSelected('Products')}
							routerLink={<Link to='/products' />}
							icon={<ShoppingCartOutlined />}
						>
							{' '}
							Products{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Products')}
							routerLink={<Link to='/products' />}
							icon={<ShoppingCartOutlined />}
						>
							{' '}
							Products{' '}
						</MenuItem>
					)}

					{selected === 'Orders' ? (
						<MenuItem
							active
							onClick={() => setSelected('Orders')}
							routerLink={<Link to='/orders' />}
							icon={<ReceiptOutlined />}
						>
							{' '}
							Orders{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Orders')}
							routerLink={<Link to='/orders' />}
							icon={<ReceiptOutlined />}
						>
							{' '}
							Orders{' '}
						</MenuItem>
					)}
				</SubMenu>

				{/* Pages */}
				<SubMenu icon={<Bookmark />} label='Pages'>
					{selected === 'Form' ? (
						<MenuItem
							active
							onClick={() => setSelected('Form')}
							routerLink={<Link to='/form' />}
							icon={<PersonOutlined />}
						>
							{' '}
							Profile Form{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Form')}
							routerLink={<Link to='/form' />}
							icon={<PersonOutlined />}
						>
							{' '}
							Profile Form{' '}
						</MenuItem>
					)}

					{selected === 'Calendar' ? (
						<MenuItem
							active
							onClick={() => setSelected('Calendar')}
							routerLink={<Link to='/calendar' />}
							icon={<CalendarTodayOutlined />}
						>
							{' '}
							Calendar{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Calendar')}
							routerLink={<Link to='/calendar' />}
							icon={<CalendarTodayOutlined />}
						>
							{' '}
							Calendar{' '}
						</MenuItem>
					)}

					{selected === 'FAQ' ? (
						<MenuItem
							active
							onClick={() => setSelected('FAQ')}
							routerLink={<Link to='/faq' />}
							icon={<HelpOutlineOutlined />}
						>
							FAQ
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('FAQ')}
							routerLink={<Link to='/faq' />}
							icon={<HelpOutlineOutlined />}
						>
							FAQ
						</MenuItem>
					)}
				</SubMenu>

				{/* Charts */}
				<SubMenu icon={<BubbleChart />} label='Charts'>
					{selected === 'Bar' ? (
						<MenuItem
							active
							onClick={() => setSelected('Bar')}
							routerLink={<Link to='/bar' />}
							icon={<BarChartOutlined />}
						>
							{' '}
							Bar Chart{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Bar')}
							routerLink={<Link to='/bar' />}
							icon={<BarChartOutlined />}
						>
							{' '}
							Bar Chart{' '}
						</MenuItem>
					)}

					{selected === 'Pie' ? (
						<MenuItem
							active
							onClick={() => setSelected('Pie')}
							routerLink={<Link to='/pie' />}
							icon={<PieChartOutlineOutlined />}
						>
							{' '}
							Pie Chart{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Pie')}
							routerLink={<Link to='/pie' />}
							icon={<PieChartOutlineOutlined />}
						>
							{' '}
							Pie Chart{' '}
						</MenuItem>
					)}

					{selected === 'Line' ? (
						<MenuItem
							active
							onClick={() => setSelected('Line')}
							routerLink={<Link to='/line' />}
							icon={<TimelineOutlined />}
						>
							{' '}
							Line Chart{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Line')}
							routerLink={<Link to='/line' />}
							icon={<TimelineOutlined />}
						>
							{' '}
							Line Chart{' '}
						</MenuItem>
					)}

					{selected === 'Geo' ? (
						<MenuItem
							active
							onClick={() => setSelected('Geo')}
							routerLink={<Link to='/geography' />}
							icon={<MapOutlined />}
						>
							{' '}
							Map Chart{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Geo')}
							routerLink={<Link to='/geography' />}
							icon={<MapOutlined />}
						>
							{' '}
							Map Chart{' '}
						</MenuItem>
					)}
				</SubMenu>
			</Menu>
		</ProSidebar>
	);
}

export default Sidebar;
