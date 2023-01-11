import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { usePetrolimex } from '@services/petrol/usePetrol';
import Head from 'next/head';

function GiaXangDauView() {
	const { isSuccess, data, isLoading, isError } = usePetrolimex();
	const imageURL =
		'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Petrolimex-PLX.png';
	const name = 'Giá xăng dầu Petrolimex';
	console.log(data);
	return (
		<>
			<MainLayout>
				{data && (
					<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
						<NameHeader
							name={name}
							image={imageURL}
							timeUpdate={data[0].timeUpdate}
						/>
					</div>
				)}
			</MainLayout>
		</>
	);
}

export default GiaXangDauView;
