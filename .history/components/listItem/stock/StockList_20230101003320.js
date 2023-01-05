import StockItem from '@components/item/stock/StockItem';
import { useStockList } from '@services/stock/useStock';

function StockList() {
	const { data, isLoading, isError, error, isFetching } = useStockList('hnx');
	if (isLoading) {
		return (
			<tr>
				<td>Đang tải</td>
			</tr>
		);
	}
	if (isError) {
		return (
			<tr>
				<td>{error.message}</td>
			</tr>
		);
	}
	return (
		<>
			{data &&
				data.map((stock, index) => (
					<StockItem key={stock.name} stock={stock} index={index} />
				))}
		</>
	);
}

export default StockList;
