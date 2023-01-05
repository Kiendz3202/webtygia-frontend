import Link from 'next/link';
import { useRouter } from 'next/router';

function StockItem() {
	const router = useRouter();
	const path = router.asPath;
	return (
		<tr>
			<td className="w-[4.8rem]  bg-back-ground-1 text-center">BII</td>
			<td className="w-[16rem]   bg-back-ground-1 text-start pl-[3rem]">
				CTCP Louis Land
			</td>
			<td className=" bg-[#F5F5F5] text-center ">2.10</td>
			<td className=" bg-back-ground-1 text-center  w-[6rem]">2.20</td>
			<td className=" bg-back-ground-1 text-center pl-[1rem]">2.00</td>
			<td className=" bg-back-ground-1 text-center ">20</td>
			<td className=" bg-back-ground-1  text-center pl-[1rem]">5%</td>
			<td className=" bg-back-ground-1  text-center pl-[1rem]">473,07</td>
		</tr>
	);
}

export default StockItem;
