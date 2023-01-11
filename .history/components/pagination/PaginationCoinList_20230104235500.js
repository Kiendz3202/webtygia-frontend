import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationCoinList() {
	return (
		<Stack spacing={2}>
			<Pagination count={10} variant="outlined" />
			<Pagination count={10} variant="outlined" color="primary" />
			<Pagination count={10} variant="outlined" color="secondary" />
			<Pagination count={10} variant="outlined" disabled />
		</Stack>
	);
}

export default PaginationCoinList;