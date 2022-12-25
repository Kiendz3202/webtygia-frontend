import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';

function Header() {
	return (
		<header className=" border-b border-grey-boder flex justify-between h-[7.8rem] items-center">
			<div className=" flex-1">
				<ul className="flex">
					<li>
						<SearchIcon className=" w-6 h-7" />
					</li>
					<li className=" w-full">
						<input
							className=" w-full outline-none"
							placeholder="Tìm kiếm"
						/>
					</li>
				</ul>
			</div>
			<div className="w-[31.8rem]">
				<ul className="flex justify-end pr-[2.5rem] items-center">
					<li>
						<NotificationsNoneIcon />
					</li>
					<li className=" pl-[3rem]">
						<Avatar src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/319823466_1167699333875239_1971434876324844237_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ia7FzH6yNnoAX8u0JUT&tn=R5tPph1G-IwzutAt&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCE1l9GUAo6P5Et5d8v8DV1Hiht15ePzwUhlTt4G826QA&oe=63AC99B2" />
					</li>
					<li className=" text-[1.8rem] block w-[15rem] ">
						Phan duong
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
