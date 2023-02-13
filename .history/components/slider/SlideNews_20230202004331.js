import React, { useState, useRef, useEffect } from 'react';
import styles from './slideNews.module.css';

const colors = ['#0088FE', '#00C49F', '#FFBB28'];
const delay = 2500;

function SlideNews() {
	const [index, setIndex] = React.useState(0);
	const timeoutRef = React.useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === colors.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<div className={`${styles.slideshow}`}>
			<div
				className={`${styles.slideshowSlider}`}
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{colors.map((backgroundColor, index) => (
					<img
						className={`${styles.slide} object-cover`}
						key={index}
						// style={{ backgroundColor }}
						src="https://scontent.xx.fbcdn.net/v/t1.15752-9/327435309_719039339708107_7072648672360526159_n.jpg?stp=dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=O4Q-T2RGOGMAX-J9eVr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRTY71GvPj0Me7rXW8nuPwKEOEaC2jn1T6VME-LDUjDLw&oe=64022A2B"
					></img>
				))}
			</div>

			<div className={`${styles.slideshowDots}`}>
				{colors.map((_, idx) => (
					<div
						key={idx}
						className={`${styles.slideshowDot} ${
							index === idx ? styles.active : ''
						}`}
						onClick={() => {
							setIndex(idx);
						}}
					></div>
				))}
			</div>
		</div>
	);
}

export default SlideNews;
