/* eslint-disable no-unused-vars */
import {useTheme, Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockDataOrders} from '../data/mockData';

function Orders() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	// todo Include products
	const columns = [
		{field: 'id', headerName: 'ID'},
		{field: 'name', headerName: 'Name', flex: 1},
		// {field: 'products', headerName: 'Products', flex: 1},
		{field: 'address', headerName: 'Address', flex: 2},
		{
			field: 'totalPrice',
			headerName: 'Price',
			flex: 1,
			renderCell: ({row: {totalPrice}}) => {
				return <div>${totalPrice.toFixed(2)}</div>;
			}
		}
	];

	return (
		<Box sx={{m: '20px'}}>
			<Header title='ORDERS' subtitle='Invoices for Purchased Items' />

			{/* MUI Table */}
			<Box
				sx={{
					height: '75vh',
					m: '40px 0 0 0',
					'& .MuiDataGrid-root': {border: 'none'},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none'
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none'
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400]
					},
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: colors.blueAccent[700],
						borderTop: 'none'
					}
				}}
			>
				<DataGrid rows={mockDataOrders} columns={columns} />
			</Box>
		</Box>
	);
}

export default Orders;
