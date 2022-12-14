import {useTheme, Box, Typography} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {AdminPanelSettingsOutlined, LockOpenOutlined} from '@mui/icons-material';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockDataUsers} from '../data/mockData';

function Users() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	// Creates the column headers in the MUI Table.
	const columns = [
		{field: 'id', headerName: 'ID', cellClassName: 'green-column'},
		{field: 'firstName', headerName: 'First Name', flex: 1},
		{field: 'lastName', headerName: 'Last Name', flex: 1, cellClassName: 'green-column'},
		{field: 'email', headerName: 'Email', flex: 1},
		{
			field: 'isAdmin',
			headerName: 'Access',
			flex: 1,
			// Gives this column a class name.
			cellClassName: 'green-column',
			// renderCell styles the data in a specific column.
			renderCell: ({row: {isAdmin}}) => {
				return (
					<Box
						sx={{
							width: '60%',
							m: '0 auto',
							p: '5px',
							display: 'flex',
							justifyContent: 'center',
							backgroundColor:
								isAdmin === true
									? colors.greenAccent[600]
									: colors.greenAccent[700],
							borderRadius: '4px'
						}}
					>
						{isAdmin === true ? <AdminPanelSettingsOutlined /> : <LockOpenOutlined />}
						<Typography sx={{ml: '5px', color: colors.grey[100]}}>
							{isAdmin === true ? 'Admin' : 'User'}
						</Typography>
					</Box>
				);
			}
		}
	];

	return (
		<Box sx={{m: '20px'}}>
			<Header title='USERS' subtitle='Managing Administrators and Customers' />

			{/* MUI Table */}
			<Box
				sx={{
					height: '75vh',
					m: '40px 0 0 0',
					// Removes border around the table's perimeter.
					'& .MuiDataGrid-root': {border: 'none'},
					// Toolbar's text color.
					'& .MuiButtonBase-root': {
						color: colors.grey[100]
					},
					// Column headers' background color.
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none'
					},
					// Every other column's text color.
					'& .green-column': {
						color: colors.greenAccent[300]
					},
					// Checkbox color.
					'& .MuiCheckbox-root.Mui-checked': {
						color: colors.grey[100]
					},
					// Removes the bottom border of each row.
					'& .MuiDataGrid-cell': {
						borderBottom: 'none'
					},
					// Rows' background color.
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400]
					},
					// Footer's background color.
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: colors.blueAccent[700],
						borderTop: 'none'
					}
				}}
			>
				<DataGrid
					rows={mockDataUsers}
					columns={columns}
					components={{Toolbar: GridToolbar}} // Enables the toolbar
					checkboxSelection // Enables the checkboxes
				/>
			</Box>
		</Box>
	);
}

export default Users;
