import Link from 'next/link';
import { useRouter } from 'next/router';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function StockItem({ stock, index, user, saveStocks, deleteStocks }) {
	const router = useRouter();
	const path = router.pathname;

	return (
		<tr
			key={stock.name}
			className=" text-[1.6rem] text-black-text h-[4.5rem] bg-back-ground-1"
		>
			<td className=" rounded-2xl text-center text-blue-text font-medium flex h-[4.5rem] leading-[4.5rem] justify-between">
				<span className="mr-[1rem]">
					{user?.followStocks[0]?.symbol?.includes(stock?.symbol) ? (
						<StarOutlineIcon
							onClick={() => deleteStocks(stock?.symbol)}
							className=" text-green-500 cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					) : (
						<StarOutlineIcon
							onClick={() => saveStocks(stock?.symbol)}
							className="cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					)}
				</span>
				<Link
					// onClick={setExchangeNameToLocalStorage}
					href={`/co-phieu/${stock.symbol}`}
					className="block"
					title={stock.name}
				>
					{stock.symbol}
				</Link>
			</td>
			{/* <td className="w-[16rem] truncate max-w-[16rem]   text-start pl-[3rem] cursor-pointer h">
				<Link href={`${path}/${stock.symbol}`}>
					<span className="hover:opacity-80">{stock.name}</span>
				</Link>
			</td> */}
			<td className="w-[10px] bg-white"></td>
			<td className="  text-center ">{stock.reference}</td>
			<td className="  text-center  w-[6rem]">{stock.high}</td>
			<td className="  text-center pl-[3rem]">{stock.low}</td>
			<td
				className={`${
					+stock.change > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}   text-center`}
			>
				{stock.change}
			</td>
			<td
				className={`${
					+stock.changePercent.slice(0, -1) > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}    text-center pl-[1rem]`}
			>
				{stock.changePercent}
			</td>
			<td className="   text-center pl-[1rem]">{stock.turnOver}</td>
		</tr>
	);
}

export default StockItem;
