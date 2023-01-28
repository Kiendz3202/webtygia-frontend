import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function PaginationCoinList({ setPageNumber, page }) {
	// const [page, setPage] = useState(1);
	const handleChange = (event, value) => {
		setPageNumber(value);
		// console.log(value);
	};
	return (
		<Stack
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			sx={{ margin: '2rem auto' }}
			spacing={4}
		>
			<Pagination
				spacing={4}
				// page={page}
				onChange={handleChange}
				size="small"
				count={page}
				variant="outlined"
				color="primary"
			/>
		</Stack>
	);
}

export default PaginationCoinList;