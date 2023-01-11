import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationCoinList() {
	return (
		<Stack
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			sx={{ margin: '2rem auto' }}
			spacing={2}
		>
			<Pagination
				page={page}
				onChange={handleChange}
				size="large"
				count={8}
				variant="outlined"
				color="primary"
			/>
		</Stack>
	);
}

export default PaginationCoinList;