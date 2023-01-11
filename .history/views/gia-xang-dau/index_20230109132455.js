import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { usePetrolimex } from '@services/petrol/usePetrol';
import Head from 'next/head';

function GiaXangDauView() {
	const { isSuccess, data, isLoading, isError } = usePetrolimex();
	const imageURL =
		'https://printgo.vn/uploads/file-logo/1/512x512.075e191500b6b0dd513f7d34d8bbfa77.ai.1.png';
	const name = 'Giá xăng dầu Petrolimex';
	console.log(data);
	return (
		<>
			<MainLayout>
				<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<NameHeader
						name={name}
						image={imageURL}
						timeUpdate={data?.timeUpdate}
					/>
				</div>
			</MainLayout>
		</>
	);
}

export default GiaXangDauView;
