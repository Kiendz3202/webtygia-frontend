import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Link from 'next/link';
import { useRouter } from 'next/router';

function BottomNavigation() {
	const router = useRouter();
	console.log(router.asPath);
	return (
		<div className="sm:hidden overflow-hidden fixed bottom-0 z-50 w-full h-[8rem] ">
			<div className="flex text-[2rem] justify-between items-center h-full px-[1.5rem] bg-white text-grey-text-2 pb-[0.5rem]">
				<Link href="/trang-chu">
					<div className="flex flex-col justify-center items-center text-[#fc032c]">
						<div>
							<HomeIcon sx={{ fontSize: '4rem' }} />
						</div>
						<div>Trang chủ</div>
					</div>
				</Link>
				<Link
					activeClassName="text-red-100 hover:text-red-100 bg-red-700"
					href="/thi-truong"
				>
					<div className="flex flex-col justify-center items-center">
						<div>
							<AttachMoneyIcon sx={{ fontSize: '4rem' }} />
						</div>
						<div>Thị trường</div>
					</div>
				</Link>
				<Link href="/tin-tuc">
					<div className="flex flex-col justify-center items-center">
						<div>
							<ArticleIcon sx={{ fontSize: '4rem' }} />
						</div>
						<div>Tin tức</div>
					</div>
				</Link>
				<Link href="/ca-nhan">
					<div className="flex flex-col justify-center items-center">
						<div>
							<PersonIcon sx={{ fontSize: '4rem' }} />
						</div>
						<div>Cá nhân</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default BottomNavigation;
