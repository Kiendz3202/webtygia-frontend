import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationCoinList() {
	return (
		<Stack sx={{ margin: auto }} spacing={2}>
			<Pagination
				sx={{ width: 600 }}
				count={10}
				variant="outlined"
				color="primary"
			/>
		</Stack>
	);
}

export default PaginationCoinList;
