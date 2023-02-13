import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { useOnHoverOutside } from '@utils/useOnHoverOutside';

function Menu() {
	return <div>Menu</div>;
}

function InterestRateDropdown() {
	const dropdownRef = useRef(null); // Create a reference for dropdown container
	const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

	// Function to close dropdown
	const closeHoverMenu = () => {
		setMenuDropDownOpen(false);
	};

	useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
	return (
		<div>
			<Menu />
		</div>
	);
}

export default InterestRateDropdown;
