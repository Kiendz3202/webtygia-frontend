import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function PaginationCoinList({ setPageNumber, page }) {
	const [pageNav, setPageNav] = useState(1);
	const handleChange = (event, value) => {
		// setPageNumber(value);
		setPageNav(value);
		// console.log(value);
	};
	return (
		<Stack
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			sx={{ margin: '2rem auto' }}
			spacing={2}
		>
			<Pagination
				page={pageNav}
				onChange={handleChange}
				size="large"
				count={page}
				variant="outlined"
				color="primary"
				hidePrevButton
				hideNextButton
			/>
		</Stack>
	);
}

export default PaginationCoinList;
