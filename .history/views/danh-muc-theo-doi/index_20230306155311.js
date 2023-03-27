import CoinFollowTable from '@components/followTable/CoinFollowTable';
import NewsFollowTable from '@components/followTable/NewsFollowTable';
import MainLayout from '@components/layouts/mainLayout';
import { useUserPopulate } from '@services/user/useUser';
import Head from 'next/head';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import StockFollowTable from '@components/followTable/StockFollowTable';
import Loading from '@components/UI/Loading';

function DanhMucTheoDoiView() {
	const [email, setEmail] = useState();
	// const [user, setUser] = useState();
	const [populateField, setPopulateField] = useState('followNews');

	const { dataisSuccess, data, isLoading, isError } =
		useUserPopulate(populateField);
	// const { data: coin } = useUserPopulate(email, 'followCoins');
	// useEffect(() => {
	// 	setEmail(localStorage.getItem('email'));
	// 	// setUser(data);
	// }, [typeof window, data]);

	console.log(data && data);
	const handleChange = (e) => {
		setPopulateField(e.target.value);
	};

	if (isLoading) {
		return (
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					<Loading />
				</div>
			</MainLayout>
		);
	}
	if (data) {
		return (
			<>
				<MainLayout>
					<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div className="flex w-full lg:w-[200px]  items-center ">
							<Box className=" w-full min-w-[10rem] mt-[2rem] ">
								<FormControl fullWidth>
									<InputLabel
										id="demo-simple-select-label"
										sx={{ fontSize: 16 }}
									>
										Thể loại
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										sx={{ fontSize: 14 }}
										value={populateField}
										label="type"
										onChange={handleChange}
									>
										<MenuItem
											sx={{ fontSize: 14 }}
											value={'followCoins'}
										>
											Coin
										</MenuItem>
										<MenuItem
											sx={{ fontSize: 14 }}
											value={'followStocks'}
										>
											Cổ phiếu
										</MenuItem>
										<MenuItem
											sx={{ fontSize: 14 }}
											value={'followNews'}
										>
											Tin tức
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</div>

						{populateField === 'followCoins' && (
							<CoinFollowTable
								data={data}
								populateField={populateField}
							/>
						)}
						{populateField === 'followNews' && (
							<NewsFollowTable
								data={data}
								populateField={populateField}
							/>
						)}
						{populateField === 'followStocks' && (
							<StockFollowTable
								data={data}
								populateField={populateField}
							/>
						)}
					</div>
				</MainLayout>
			</>
		);
	}
}

export default DanhMucTheoDoiView;
