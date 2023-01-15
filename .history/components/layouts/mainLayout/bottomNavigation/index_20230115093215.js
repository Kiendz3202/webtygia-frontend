import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { useState, useEffect } from 'react';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

function BottomNavigation() {
	const { height, width } = useWindowDimensions();
	return (
		<div className={` absolute top-[${0}px] w-full h-[80px] z-50`}>
			<div className="flex text-[2rem] justify-between items-center h-full px-[1.5rem] bg-white text-grey-text-2 pb-[0.5rem]">
				<div className="flex flex-col justify-center items-center text-[#fc032c]">
					<div>
						<HomeIcon sx={{ fontSize: '4rem' }} />
						{height}
					</div>
					<div>Trang chủ</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<AttachMoneyIcon sx={{ fontSize: '4rem' }} />
					</div>
					<div>Thị trường</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<ArticleIcon sx={{ fontSize: '4rem' }} />
					</div>
					<div>Tin tức</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<PersonIcon sx={{ fontSize: '4rem' }} />
					</div>
					<div>Cá nhân</div>
				</div>
			</div>
		</div>
	);
}

export default BottomNavigation;
