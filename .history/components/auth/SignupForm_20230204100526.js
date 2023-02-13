import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ImageIcon from '@mui/icons-material/Image';

function SignupForm() {
	const [passwordIsHidden, setPasswordIshidden] = useState(true);

	const changePasswordHidden = () => {
		setPasswordIshidden((prev) => !prev);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit');
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
					placeholder="Nhập tên người dùng của bạn"
					className="h-[40px] p-[12px] text-[12px] mt-[5px]  rounded-[8px] outline-none border-b-2 border-[#f3f3f4]"
				/>
			</div>
			<div className="flex flex-col mt-[2rem]">
				<label htmlFor="avatar" className="font-medium text-[15px]">
					<div className="">
						<div>Chọn ảnh avatar:</div>
						<div className="flex bg-black text-white w-[50px] mt-[5px]">
							<div>Chọn ảnh</div>
							<ImageIcon sx={{ fontSize: '22px' }} />
						</div>
					</div>
				</label>
				<input
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
					placeholder="Nhập email của bạn"
					className="h-[40px] p-[12px] text-[12px] mt-[5px]  rounded-[8px] outline-none border-b-2 border-[#f3f3f4]"
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
					className=" h-[40px] p-[12px] text-[12px] mt-[5px] rounded-[8px] outline-none border-b-2 border-[#f3f3f4]"
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
					className=" h-[40px] p-[12px] text-[12px] mt-[5px] rounded-[8px] outline-none border-b-2 border-[#f3f3f4]"
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
					Đăng nhập
				</button>
			</div>
		</form>
	);
}

export default SignupForm;
