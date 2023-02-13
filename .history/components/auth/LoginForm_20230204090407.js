import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LoginForm() {
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
					className="h-[40px] p-[12px] text-[12px] "
				/>
			</div>
			<div className="flex flex-col mt-[2rem] relative">
				<label htmlFor="password" className="font-medium text-[15px]">
					Password:
				</label>
				<input
					id="password"
					type="text"
					placeholder="Nhập password của bạn"
					className=" h-[40px] p-[12px] text-[12px] "
				/>
				<div className=" absolute bottom-[13px] right-[10px]">
					<VisibilityIcon sx={{ fontSize: '18px' }} />
				</div>
			</div>
		</form>
	);
}

export default LoginForm;
