import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationCoinList() {
	return (
		<Stack sx={{ width: 300 }} spacing={2}>
			<Pagination count={10} variant="outlined" color="primary" />
		</Stack>
	);
}

export default PaginationCoinList;
