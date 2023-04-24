import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import UndoIcon from '@mui/icons-material/Undo';
import Loading from '@components/UI/Loading';
import { fetchLogin } from '@services/auth/useAuth';
import { useRouter } from 'next/router';
import axios from 'axios';
import GoogleButton from 'react-google-button';

function LoginForm() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [passwordIsHidden, setPasswordIshidden] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const router = useRouter();

	const changePasswordHidden = () => {
		setPasswordIshidden((prev) => !prev);
	};
	const handleSubmit = async (e) => {
		// e.preventDefault();

		// const data = await useLogin({
		// 	email,
		// 	password,
		// });

		// if (!data) {
		// 	return;
		// }

		// localStorage.setItem('accessToken', data.accessToken);
		// localStorage.setItem('name', data.user.name);
		// localStorage.setItem('avatar', data.user.avatar);
		// localStorage.setItem('email', data.user.email);
		// localStorage.setItem('_id', data.user._id);

		// router.push('/');
		// console.log(data);

		e.preventDefault();
		console.log('submit');

		if (
			email === '' ||
			!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
		) {
			setErrorMessage('Email không hợp lệ');
			return;
		}
		if (password.length < 6) {
			setErrorMessage('Mật khẩu phải có 6 ký tự trở lên');
			return;
		}

		const dataForm = new FormData();

		dataForm.append('email', email);
		dataForm.append('password', password);

		try {
			setIsLoading(true);

			const data = await fetchLogin(dataForm);

			if (data.status === 'fail') {
				console.log('1');
				setErrorMessage(data.message);
				setIsLoading(false);
				return;
			}
			setIsLoading(false);
			localStorage.setItem('accessToken', data.data.accessToken);
			localStorage.setItem('name', data.data.user.name);
			localStorage.setItem('avatar', data.data.user.avatar);
			localStorage.setItem('email', data.data.user.email);
			localStorage.setItem('_id', data.data.user._id);
			localStorage.setItem('role', data.data.user.role);

			router.push('/');
		} catch (error) {
			setErrorMessage('Đăng nhập thất bại, vui lòng thử lại!');
			setIsLoading(false);
		}
	};

	const handleEmail = (e) => {
		// if(e.target.value.length > 2 && e.target.value.length < 25 ){
		setErrorMessage('');
		setEmail(e.target.value.trim());
		// }
	};
	const handlePassword = (e) => {
		// if(e.target.value.length > 2 && e.target.value.length < 25 ){
		setErrorMessage('');
		setPassword(e.target.value.trim());
		// }
	};

	const LoginByGoogle = async () => {
		// router.replace(`http://localhost:5000/auth/google`);
		router.replace(
			`${process.env.NEXT_PUBLIC_BE_SUBDOMAIN_URL}/auth/google`
			// `http://localhost:5000/auth/google`
		);
	};

	const handlePushToHomePage = (e) => {
		e.preventDefault();
		router.push('/trang-chu');
	};
	return (
		<form onSubmit={handleSubmit} className="mt-[3rem]">
			<div className="flex flex-col">
				<label htmlFor="email" className="font-medium text-[15px]">
					Email:
				</label>
				<input
					id="email"
					type="text"
					placeholder="Nhập email của bạn"
					onChange={handleEmail}
					className="h-[40px] p-[12px] text-[13px] mt-[5px]  rounded-[8px] outline-none border-b-2 border-[#f3f3f4]"
				/>
			</div>
			<div className="flex flex-col mt-[2rem] relative">
				<label htmlFor="password" className="font-medium text-[15px]">
					Mật khẩu:
				</label>
				<input
					id="password"
					type={passwordIsHidden ? 'password' : 'text'}
					placeholder="Nhập mật khẩu của bạn"
					onChange={handlePassword}
					className=" h-[40px] p-[12px] text-[13px] mt-[5px] rounded-[8px] outline-none border-b-2 border-[#f3f3f4]"
				/>
				<div className=" absolute bottom-[12px] right-[10px]">
					{!passwordIsHidden && (
						<VisibilityIcon
							onClick={changePasswordHidden}
							className=" hover:opacity-80 cursor-pointer"
							sx={{ fontSize: '18px' }}
						/>
					)}
					{passwordIsHidden && (
						<VisibilityOffIcon
							onClick={changePasswordHidden}
							className=" hover:opacity-80 cursor-pointer"
							sx={{ fontSize: '18px' }}
						/>
					)}
				</div>
			</div>
			<div className="mt-[3rem]">
				{!isLoading ? (
					<button
						className="w-full h-[40px] text-center text-white-text text-[15px] bg-[#111727] rounded-[8px]"
						type="submit"
					>
						Đăng nhập
					</button>
				) : (
					<Loading />
				)}
				<span className="block text-red-600 text-[12px] mt-[4px]">
					{errorMessage}
				</span>
			</div>
			<div className="">
				<div className="text-center mt-[20px] text-[14px]">
					Hoặc đăng nhập với
				</div>
				<div className="flex justify-center mt-[20px]">
					<GoogleButton onClick={LoginByGoogle} />
				</div>
			</div>
			<button
				onClick={handlePushToHomePage}
				className="block text-center mt-[40px] text-[14px] border-b border-grey-boder w-fit mx-auto text-black-text font-medium cursor-pointer hover:opacity-80"
			>
				<span>
					<UndoIcon />
				</span>
				Trang chủ
			</button>
		</form>
	);
}

export default LoginForm;
