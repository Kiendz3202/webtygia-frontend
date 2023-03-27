import StockFollowTable from '@components/followTable/StockFollowTable';
import MainLayout from '@components/layouts/mainLayout';
import Loading from '@components/UI/Loading';
import { useUserPopulate } from '@services/user/useUser';
import React, { useState } from 'react';

function StockView() {
	const [email, setEmail] = useState();
	// const [populateField, setPopulateField] = useState('followStocks');
	const [followDataOffline, setFollowDataOffline] = useState();

	const { dataisSuccess, data, isLoading, isError } =
		useUserPopulate(populateField);

	useEffect(() => {
		const fetchDataFollow = async (arrIdCoin, arrIdStock, arrIdNews) => {
			const res = await axios
				.post(
					'http://localhost:5000/api/v1/user/preview-data-follow-offline',
					{
						arrIdCoin,
						arrIdStock,
						arrIdNews,
					}
				)
				.then((res) => {
					const obj = {};
					obj.followCoins = res.data.data.coinList;
					obj.followStocks = res.data.data.stockList;
					obj.followNews = res.data.data.newsList;
					setFollowDataOffline(obj);
				})
				.catch((err) => console.log(err));
		};

		const isLocalStorage = JSON.parse(localStorage.getItem('followCoins'));

		if (isLocalStorage) {
			const arrIdCoin = JSON.parse(localStorage.getItem('followCoins'));
			const arrIdStock = JSON.parse(localStorage.getItem('followStocks'));
			const arrIdNews = JSON.parse(localStorage.getItem('followNews'));
			fetchDataFollow(arrIdCoin, arrIdStock, arrIdNews);
		}
	}, [typeof window]);
	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<div className="text-[2.8rem] font-semibold">
						Danh mục theo dõi cổ phiếu
					</div>

					{data ? (
						<div>
							<StockFollowTable
								data={data}
								populateField={populateField}
							/>
						</div>
					) : (
						<div>
							<StockFollowTable
								data={data}
								populateField={populateField}
							/>
						</div>
					)}

					{isLoading && <Loading />}
				</div>
			</MainLayout>
		</>
	);
}

export default StockView;