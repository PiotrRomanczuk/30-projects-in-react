import React from 'react';
import Title from './components/Title';

export default function EsignatureApp() {
	return (
		<div className='container text-center'>
			<Title classes={'title'} text={'Piotr'} />
			<Title classes={'subtitle'} text={'Date'} />
		</div>
	);
}
