import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LoginForm() {
	const [passwordIsHidden, setPasswordIshidden] = useState(true);

	const changePasswordHidden = () => {
		setPasswordIshidden((prev) => !prev);
	};
	return (
		<form className="mt-[3rem]">
			<div className="flex flex-col">
				<label htmlFor="email" className="font-medium text-[15px]">
					Email:
				</label>
				<input
					id="email"
					type="text"
					placeholder="Nhập email của bạn"
					className="h-[40px] p-[12px] text-[12px] mt-[5px]  rounded-[8px] outline-noneborder-b border-[#f3f3f4]"
				/>
			</div>
			<div className="flex flex-col mt-[2rem] relative">
				<label htmlFor="password" className="font-medium text-[15px]">
					Password:
				</label>
				<input
					id="password"
					type={passwordIsHidden ? 'password' : 'text'}
					placeholder="Nhập password của bạn"
					className=" h-[40px] p-[12px] text-[12px] mt-[5px] rounded-[8px] outline-blue-300 border-b border-[#f3f3f4]"
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
		</form>
	);
}

export default LoginForm;
