import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ImageIcon from '@mui/icons-material/Image';
import { useSignup } from '@services/auth/useAuth';

function Loading() {
	return (
		<div className="center">
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<style jsx>{`
				.center {
					height: 50px;
					display: flex;
					justify-content: center;
					align-items: center;
					/* background: #000; */
				}
				.wave {
					width: 2px;
					height: 30px;
					background: linear-gradient(45deg, cyan, #fff);
					margin: 10px;
					animation: wave 1s linear infinite;
					border-radius: 20px;
				}
				.wave:nth-child(2) {
					animation-delay: 0.1s;
				}
				.wave:nth-child(3) {
					animation-delay: 0.2s;
				}
				.wave:nth-child(4) {
					animation-delay: 0.3s;
				}
				.wave:nth-child(5) {
					animation-delay: 0.4s;
				}
				.wave:nth-child(6) {
					animation-delay: 0.5s;
				}
				.wave:nth-child(7) {
					animation-delay: 0.6s;
				}
				.wave:nth-child(8) {
					animation-delay: 0.7s;
				}
				.wave:nth-child(9) {
					animation-delay: 0.8s;
				}
				.wave:nth-child(10) {
					animation-delay: 0.9s;
				}

				@keyframes wave {
					0% {
						transform: scale(0);
					}
					50% {
						transform: scale(1);
					}
					100% {
						transform: scale(0);
					}
				}
			`}</style>
		</div>
	);
}

function SignupForm() {
	const [passwordIsHidden, setPasswordIshidden] = useState(true);
	const [selectedFile, setSelectedFile] = useState();
	const [nameUser, setNameUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [image, setImage] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const changePasswordHidden = () => {
		setPasswordIshidden((prev) => !prev);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('submit');

		if (nameUser.length < 2 || nameUser.length > 25) {
			setErrorMessage('Độ dài tên phải từ 2 đến 25 ký tự');
			return;
		}
		if (!image) {
			setErrorMessage('Bạn chưa chọn avatar');
			return;
		}
		if (
			email === '' ||
			!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
		) {
			setErrorMessage('Email không hợp lệ');
			return;
		}
		if (
			password !== confirmPassword ||
			password.length < 6 ||
			confirmPassword.length < 6
		) {
			setErrorMessage('Mật khẩu phải có 6 ký tự trở lên');
			return;
		}

		const dataForm = new FormData();

		dataForm.append('name', nameUser);
		dataForm.append('email', email);
		dataForm.append('password', password);
		dataForm.append('image', image);

		try {
			setIsLoading(true);

			const data = await useSignup(dataForm);

			if (!data) {
				setErrorMessage('Tạo tài khoản thất bại, vui lòng thử lại!');
				setIsLoading(false);
				return;
			}
			console.log(data);
		} catch (error) {
			setErrorMessage('Tạo tài khoản thất bại, vui lòng thử lại!');
			setIsLoading(false);
		}
	};

	const handleImage = (e) => {
		setErrorMessage('');
		const reader = new FileReader();
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result);
		};
	};

	const handleName = (e) => {
		// if(e.target.value.length > 2 && e.target.value.length < 25 ){
		setErrorMessage('');
		setNameUser(e.target.value.trim());
		// }
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
	const handleConfirmPassword = (e) => {
		// if(e.target.value.length > 2 && e.target.value.length < 25 ){
		setErrorMessage('');
		setConfirmPassword(e.target.value.trim());
		// }
	};
	return (
		<form onSubmit={handleSubmit} className="mt-[3rem]">
			<div className="flex flex-col">
				<label htmlFor="name" className="font-medium text-[15px]">
					Tên người dùng:
				</label>
				<input
					id="name"
					type="text"
					onChange={handleName}
					placeholder="Nhập tên người dùng của bạn"
					className="h-[40px] p-[12px] text-[13px] mt-[5px]  rounded-[8px] outline-none border-b-2 border-[#f3f3f4]"
				/>
			</div>
			<div className="flex flex-col mt-[2rem]">
				<label htmlFor="avatar" className="font-medium text-[15px]">
					<div className="flex leading-[40px]">
						<div>Avatar:</div>
						<div className="flex bg-black text-white w-[100px] items-center justify-center ml-[10px] rounded-[4px] cursor-pointer hover:opacity-80">
							<div>Chọn ảnh </div>
							<ImageIcon
								className="ml-[5px]"
								sx={{ fontSize: '22px' }}
							/>
						</div>
						{selectedFile && (
							<img
								className="w-[40px] h-[40px] ml-[10px] rounded-[1000px]"
								src={selectedFile}
							/>
						)}
					</div>
				</label>
				<input
					onChange={handleImage}
					id="avatar"
					type="file"
					placeholder="Nhập email của bạn"
					className=" h-0 opacity-0 -z-10"
				/>
			</div>
			<div className="flex flex-col mt-[2rem]">
				<label htmlFor="email" className="font-medium text-[15px]">
					Email:
				</label>
				<input
					id="email"
					type="text"
					onChange={handleEmail}
					placeholder="Nhập email của bạn"
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
			<div className="flex flex-col mt-[2rem] relative">
				<label
					htmlFor="checkPassword"
					className="font-medium text-[15px]"
				>
					Xác nhận mật khẩu:
				</label>
				<input
					id="checkPassword"
					type={passwordIsHidden ? 'password' : 'text'}
					placeholder="Nhập lại mật khẩu của bạn"
					onChange={handleConfirmPassword}
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
				<button
					className="w-full h-[40px] text-center text-white-text text-[15px] bg-[#111727] rounded-[8px]"
					type="submit"
				>
					Đăng ký
				</button>
				<span className="block text-red-600 text-[12px] mt-[4px]">
					{errorMessage}
				</span>
				<Loading />
			</div>
		</form>
	);
}

export default SignupForm;