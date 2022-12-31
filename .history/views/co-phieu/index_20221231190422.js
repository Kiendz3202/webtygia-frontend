import React from 'react';
import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function CoPhieuView() {
	return (
		<>
			<Head>
				<meta
					http-equiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<MainLayout>
				<div>CoPhieu</div>
			</MainLayout>
		</>
	);
}

export default CoPhieuView;
