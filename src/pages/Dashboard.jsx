import {useTheme, Box, Button, IconButton, Typography} from '@mui/material';
import {DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic} from '@mui/icons-material';

import Header from '../components/Header';
import StatBox from '../components/StatBox';
import LineChart from '../components/LineChart';

import {tokens} from '../theme';
import {mockDataOrders} from '../data/mockData';

function Dashboard() {
	const theme = useTheme();
	const currMode = theme.palette.mode;
	const colors = tokens(currMode);

	return (
		<Box sx={{m: '20px'}}>
			{/* Header */}
			<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
				<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
					<Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
				</Box>
				<Box>
					<Button
						sx={{
							p: '10px 20px',
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: '14px',
							fontWeight: 'bold'
						}}
					>
						<DownloadOutlined sx={{mr: '10px'}} />
						Download Reports
					</Button>
				</Box>
			</Box>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(12, 1fr)',
					gridAutoRows: '140px',
					gap: '20px'
				}}
			>
				{/* Email Stats */}
				<Box
					sx={{
						gridColumn: 'span 3',
						backgroundColor: colors.primary[400],
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<StatBox
						title='12,361'
						subtitle='Emails Sent'
						progress='0.75'
						increase='+14%'
						icon={<Email sx={{color: colors.greenAccent[600], fontSize: '26px'}} />}
					/>
				</Box>

				{/* Sale Stats */}
				<Box
					sx={{
						gridColumn: 'span 3',
						backgroundColor: colors.primary[400],
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<StatBox
						title='431,225'
						subtitle='Sales Purchased'
						progress='0.50'
						increase='+21%'
						icon={
							<PointOfSale sx={{color: colors.greenAccent[600], fontSize: '26px'}} />
						}
					/>
				</Box>

				{/* Customer Stats */}
				<Box
					sx={{
						gridColumn: 'span 3',
						backgroundColor: colors.primary[400],
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<StatBox
						title='32,441'
						subtitle='New Customers'
						progress='0.30'
						increase='+5%'
						icon={<PersonAdd sx={{color: colors.greenAccent[600], fontSize: '26px'}} />}
					/>
				</Box>

				{/* Traffic Stats */}
				<Box
					sx={{
						gridColumn: 'span 3',
						backgroundColor: colors.primary[400],
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<StatBox
						title='1,325,134'
						subtitle='Traffic Received'
						progress='0.80'
						increase='+43%'
						icon={<Traffic sx={{color: colors.greenAccent[600], fontSize: '26px'}} />}
					/>
				</Box>

				{/* Line Chart */}
				<Box
					sx={{
						gridColumn: 'span 8',
						gridRow: 'span 2',
						backgroundColor: colors.primary[400]
					}}
				>
					<Box
						sx={{
							mt: '25px',
							p: '0 30px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Box>
							<Typography
								variant='h5'
								sx={{color: colors.grey[100], fontWeight: '600'}}
							>
								Revenue Generated (2022)
							</Typography>
							<Typography
								variant='h3'
								sx={{color: colors.greenAccent[500], fontWeight: 'bold'}}
							>
								$59,342.32
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlined
									sx={{colors: colors.greenAccent[500], fontSize: '26px'}}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box sx={{height: '250px', mt: '-20px'}}>
						<LineChart isDashboard />
					</Box>
				</Box>

				{/* Order Stats */}
				<Box
					sx={{
						gridColumn: 'span 4',
						gridRow: 'span 2',
						backgroundColor: 'transparent',
						overflow: 'auto'
					}}
				>
					<Box
						sx={{
							p: '15px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							backgroundColor: colors.primary[400],
							color: colors.grey[100],
							borderBottom:
								currMode === 'dark'
									? `4px solid ${colors.primary[500]}`
									: '4px solid #fcfcfc'
						}}
					>
						<Typography variant='h5' sx={{color: colors.grey[100], fontWeight: '600'}}>
							Recent Transactions
						</Typography>
					</Box>
					{mockDataOrders.map(order => (
						<Box
							key={order.id}
							sx={{
								p: '15px',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								gap: '5px',
								backgroundColor: colors.primary[400],
								borderBottom:
									currMode === 'dark'
										? `4px solid ${colors.primary[500]}`
										: '4px solid #fcfcfc'
							}}
						>
							<Box>
								<Typography
									variant='h5'
									sx={{color: colors.greenAccent[500], fontWeight: '600'}}
								>
									{order.name}
								</Typography>
							</Box>
							<Box sx={{color: colors.grey[100]}}>{order.address}</Box>
							<Box
								sx={{
									p: '15px 10px',
									backgroundColor: colors.greenAccent[500],
									borderRadius: '4px'
								}}
							>
								${order.totalPrice.toFixed(2)}
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}

export default Dashboard;
