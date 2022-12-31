import React from 'react';
import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head'

function CoPhieuView() {
	return (
		<div>
		<Head>
		<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
		</Head>
		<MainLayout>
			<div>CoPhieu</div>
		</MainLayout>
		</div>
	);
}

export default CoPhieuView;
