import React, { useRef } from 'react';
import { useUsdToVnd } from '@services/stock/useStock';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ExchangeRate() {
	const [age, setAge] = React.useState('buyCast');
	const inputUsd = useRef();
	const inputVnd = useRef();
	const { data, isLoading, isError, error, isFetching } = useUsdToVnd();

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const convertUsdToVnd = (e) => {
		let number = e.target.value;
		if (age === 'buyCast') {
			let result = number * data?.usdBuyCast;
			if (isNaN(result)) {
				inputVnd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputVnd.current.value = result;
			}
		}
		if (age === 'buyTransfer') {
			let result = number * data?.usdBuyTransfer;
			if (isNaN(result)) {
				inputVnd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputVnd.current.value = result;
			}
		}
		if (age === 'sell') {
			let result = number * data?.usdSell;
			if (isNaN(result)) {
				inputVnd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputVnd.current.value = result;
			}
		}
	};
	const convertVndToUsd = (e) => {
		let number = e.target.value;
		if (age === 'buyCast') {
			let result = number / data?.usdBuyCast;
			if (isNaN(result)) {
				inputUsd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputUsd.current.value = result;
			}
		}
		if (age === 'buyTransfer') {
			let result = number / data?.usdBuyTransfer;
			if (isNaN(result)) {
				inputUsd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputUsd.current.value = result;
			}
		}
		if (age === 'sell') {
			let result = number / data?.usdSell;
			if (isNaN(result)) {
				inputUsd.current.value = 'Ngăn cách bằng dấu .';
			} else {
				inputUsd.current.value = result;
			}
		}
	};
	if (data) {
		return (
			<>
				<h2 className="text-[2.4rem] font-semibold ">
					Công cụ chuyển đổi tiền tệ
				</h2>
				<div className="flex mt-[3.5rem] flex-col lg:flex-row">
					<div className="flex justify-between flex-col lg:flex-row  bg-grey-4 rounded-[4px] py-[2rem] lg:py-[1.7rem] px-[1rem] lg:px-[3.8rem] h-[12rem] lg:h-[6rem] w-full mr-[2rem]">
						<div className=" justify-between  flex items-center h-[3rem] rounded-[6px] border border-grey-boder">
							<div className="mr-[1rem] border-r border-black-text-2  w-full h-full ">
								<input
									ref={inputVnd}
									onChange={convertVndToUsd}
									className="h-full outline-none text-[2rem] w-full bg-grey-4 rounded-[6px] pl-[10px]"
									placeholder="0"
								/>
							</div>
							<div className=" w-[6rem]  text-[2rem]">VND</div>
						</div>
						<div className="hidden lg:flex items-center w-[3rem] ml-[2rem] lg:ml-0">
							<SyncAltIcon sx={{ fontSize: '3rem' }} />
						</div>
						<div className=" justify-between flex items-center h-[3rem] rounded-[6px] border border-grey-boder">
							<div className="mr-[1rem] border-r border-black-text-2 w-full h-full">
								<input
									ref={inputUsd}
									onChange={convertUsdToVnd}
									className="h-full outline-none text-[2rem] w-full bg-grey-4 rounded-[6px] pl-[10px]"
									placeholder="0"
								/>
							</div>
							<div className=" w-[6rem]  text-[2rem]">USD</div>
						</div>
					</div>
					<div className="flex w-full lg:w-fit items-center ml-auto">
						<Box className=" w-full min-w-[10rem] mt-[2rem] lg:mt-0 ">
							<FormControl fullWidth>
								<InputLabel
									id="demo-simple-select-label"
									sx={{ fontSize: 16 }}
								>
									Loại USD
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									sx={{ fontSize: 14 }}
									value={age}
									label="Age"
									onChange={handleChange}
								>
									<MenuItem
										sx={{ fontSize: 14 }}
										value={'buyCast'}
									>
										Mua tiền mặt
									</MenuItem>
									<MenuItem
										sx={{ fontSize: 14 }}
										value={'buyTransfer'}
									>
										Mua chuyển khoản
									</MenuItem>
									<MenuItem
										sx={{ fontSize: 14 }}
										value={'sell'}
									>
										Bán
									</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</div>
				</div>
			</>
		);
	}
}

export default ExchangeRate;
