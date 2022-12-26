import React, { useEffect, useState } from 'react';
import Coin from './Coin';
import Stock from './Stock';
import CategoryFollowing from './CategoryFollowing';
import Petrol from './Petrol';
import Gold from './Gold';

function ReferenceSideBar() {
	const [coins, setCoins] = useState([]);
	const [stocks, setStocks] = useState([]);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetch(
	// 			'http://localhost:5000/api/v1/coin/top-rank'
	// 		)
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				return data.data;
	// 				// setLoading(false)
	// 			})
	// 			.catch((err) => console.log(err));
	// 		setCoins(data);
	// 	};
	// 	fetchData();
	// }, []);
	useEffect(() => {
		// setLoading(true)
		fetch('http://localhost:5000/api/v1/coin/top-rank')
			.then((res) => res.json())
			.then((data) => {
				setCoins(data.data);
				// setLoading(false)
			});
		fetch('http://localhost:5000/api/v1/stock/stock-top-rank')
			.then((res) => res.json())
			.then((data) => {
				setStocks(data.data);
				// setLoading(false)
			});
	}, []);
	return (
		<div className="hidden md:block w-[31.8rem] ">
			{/* danh muc theo doi xuat hien khi dang nhap */}
			<CategoryFollowing />
			<Coin />
			<Stock />
			<Petrol />
			<Gold />
		</div>
	);
}

export default ReferenceSideBar;
