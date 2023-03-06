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

function DanhMucTheoDoiView() {
	const [email, setEmail] = useState();
	// const [user, setUser] = useState();
	const [populateField, setPopulateField] = useState('followNews');

	const { data } = useUserPopulate(populateField);
	// const { data: coin } = useUserPopulate(email, 'followCoins');
	// useEffect(() => {
	// 	setEmail(localStorage.getItem('email'));
	// 	// setUser(data);
	// }, [typeof window, data]);

	console.log(data && data[populateField]);
	const handleChange = (e) => {
		setPopulateField(e.target.value);
	};
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
									label="Age"
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
				</div>
			</MainLayout>
		</>
	);
}

export default DanhMucTheoDoiView;
