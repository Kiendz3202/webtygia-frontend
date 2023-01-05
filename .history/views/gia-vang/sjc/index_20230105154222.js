import React from 'react';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import NameHeader from '@components/detail/gold/NameHeader';
import SjcPriceTable from '@components/detail/gold/priceTable/SjcPriceTable';

function SjcView() {
	const { isSuccess, data, isLoading, isError } = useGold('sjc');

	//convert to dd:mm:yy
	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}
	function formatDate(date) {
		return [
			padTo2Digits(date.getDate()),
			padTo2Digits(date.getMonth() + 1),
			date.getFullYear(),
		].join('/');
	}
	const dateDay = formatDate(new Date(data?.timeUpdate * 1000));

	//convert to hh:mm:ss
	const d = new Date(data?.timeUpdate * 1000);
	let dateHour = d.toTimeString();
	dateHour = dateHour.split(' ')[0];

	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				<div>
					<NameHeader dateDay={dateDay} dateHour={dateHour} />
					<SjcPriceTable />
				</div>
			</div>
		</MainLayout>
	);
}

export default SjcView;
