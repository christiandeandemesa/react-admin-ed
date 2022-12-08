import {useTheme, Box} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockDataOrders} from '../data/mockData';

function Orders() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{field: 'id', headerName: 'ID', cellClassName: 'green-column'},
		{field: 'name', headerName: 'Name', flex: 1},
		{
			field: 'products',
			headerName: 'Products',
			flex: 1,
			cellClassName: 'green-column',
			renderCell: ({row: {products}}) => {
				return (
					<div>
						{products.map(({id, name, price, size, color, quantity}) => (
							<div key={id}>
								{quantity} {size} {color} {name} ${price.toFixed(2)}
							</div>
						))}
					</div>
				);
			}
		},
		{field: 'address', headerName: 'Address', flex: 2},
		{
			field: 'totalPrice',
			headerName: 'Total Price',
			flex: 1,
			cellClassName: 'green-column',
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
					'& .MuiButtonBase-root': {
						color: colors.grey[100]
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none'
					},
					'& .green-column': {
						color: colors.greenAccent[300]
					},
					'& .MuiCheckbox-root.Mui-checked': {
						color: colors.grey[100]
					},
					'& .MuiDataGrid-cell': {
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
				<DataGrid
					rows={mockDataOrders}
					columns={columns}
					components={{Toolbar: GridToolbar}}
					checkboxSelection
				/>
			</Box>
		</Box>
	);
}

export default Orders;
