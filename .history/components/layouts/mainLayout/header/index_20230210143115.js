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
		></header>
	);
}

export default Header;
