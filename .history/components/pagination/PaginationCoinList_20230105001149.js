import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationCoinList() {
	return (
		<Stack
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			sx={{ margin: '2rem auto', width: '40rem' }}
			spacing={2}
		>
			<Pagination
				sx={{ width: '50rem', fontSixe: '2.4rem' }}
				count={8}
				variant="outlined"
				color="primary"
			/>
		</Stack>
	);
}

export default PaginationCoinList;
