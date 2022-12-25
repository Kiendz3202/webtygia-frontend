function CommonLayout({ children }) {
	return (
		<div className="flex max-w-[1440px]  items-center ">
			<div className="hidden lg:block">
				<div>Side bar left</div>
			</div>
			<div>
				<header>Header</header>
				<div className="flex">
					<div>{children}</div>
					<div className="hidden md:block">
						<div>side bar right</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CommonLayout;
