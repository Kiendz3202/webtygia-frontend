import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCoins = async () => {
	return axios
		.get('http://66.42.58.72/api/v1/coin/top-rank')
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
};

function CategoryFollowing() {
	const { data, isLoading, isError, error, isFetching } = useQuery(
		'coin-top-rank',
		fetchCoins,
		{
			cacheTime: 3600000,
			// refetchOnWindowFocus: false,
			staleTime: 300000,
			refetchInterval: 300000,
		}
	);

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<div className="  shadow-shadow-custom rounded-[1rem] bg-white-text mt-[4.6rem] mr-[2rem]">
			<div className="pt-[1.5rem] pl-[1.7rem] text-[1.6rem]">
				<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
					Danh mục theo dõi
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Mã</li>
						<li className="ml-[-3rem]">Giá</li>
						<li className="ml-[-1rem]">Thay đổi</li>
					</ul>
					{data &&
						data.map((coin) => (
							<ul
								key={coin.nameId}
								className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]"
							>
								<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
									<img
										className="inline-block w-[2.4rem] h-[2.4rem]"
										src={coin.image}
									/>
									<span className="pl-[1rem]">
										{coin.symbol.toUpperCase()}
									</span>
								</li>
								<li className="text-[1.4rem] font-medium ml-[-3rem]">
									{coin.currentPrice}$
								</li>
								<li className="text-[1.4rem] font-medium text-price-increase ml-[-1rem]">
									{coin.priceChange1hPercent?.slice(0, 8)}%
								</li>
							</ul>
						))}
				</div>
			</div>
		</div>
	);
}

export default CategoryFollowing;
