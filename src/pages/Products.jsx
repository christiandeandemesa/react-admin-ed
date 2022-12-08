import {useTheme, Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockDataProducts} from '../data/mockData';

function Products() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{field: 'id', headerName: 'ID'},
		{field: 'name', headerName: 'Name', flex: 2},
		{
			field: 'price',
			headerName: 'Price',
			flex: 1,
			renderCell: ({row: {price}}) => {
				return <div>${price.toFixed(2)}</div>;
			}
		},
		{
			field: 'category',
			headerName: 'Categories',
			flex: 3,
			renderCell: ({row: {category}}) => {
				return <div>{category.join(', ')}</div>;
			}
		},
		{
			field: 'size',
			headerName: 'Sizes',
			flex: 1,
			renderCell: ({row: {size}}) => {
				return <div>{size.join(', ')}</div>;
			}
		},
		{
			field: 'color',
			headerName: 'Colors',
			flex: 2,
			renderCell: ({row: {color}}) => {
				return <div>{color.join(', ')}</div>;
			}
		},
		{field: 'countInStock', headerName: 'Stock Amount', flex: 1}
	];

	return (
		<Box sx={{m: '20px'}}>
			<Header title='PRODUCTS' subtitle='Available Items for Purchase' />

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
				<DataGrid rows={mockDataProducts} columns={columns} />
			</Box>
		</Box>
	);
}

export default Products;
