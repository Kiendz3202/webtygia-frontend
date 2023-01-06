import { useGold } from '@services/gold/useGold';
import React from 'react';

function PnjView() {
	const { isSuccess, data, isLoading, isError } = useGold('pnj');
	const imageURL =
		'http://theme.hstatic.net/200000061680/1000549213/14/share_fb_home.png?v=693';
	const name = 'PNJ';
	return <div>PnjView</div>;
}

export default PnjView;
