import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [isOpenModal, setIsopenModal] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setName(localStorage.getItem('name'));
		setAvatar(localStorage.getItem('avatar'));
	}, [typeof window]);

	const toggleModal = () => {
		setIsopenModal((prev) => !prev);
	};

	const logout = () => {
		router.push('/authentication');
		localStorage.clear();
	};
	return (
		<header
			id="header"
			className=" flex flex-col items-center w-full mx-auto top-0  z-50 h-[70px] bg-blue-2"
		>
			<div className="  w-full max-w-[144rem] flex justify-between h-[6rem] items-center ">
				<div className="text-[2.2rem] font-black italic text-white">
					Tygia24h
				</div>
				<div className="flex">
					<div>{/* <input type="text" /> */}</div>
					<div className="flex items-center w-[4rem] h-[4rem] round-[1000px] bg-white">
						<NotificationsNoneIcon />
					</div>
					<div>avatar</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
