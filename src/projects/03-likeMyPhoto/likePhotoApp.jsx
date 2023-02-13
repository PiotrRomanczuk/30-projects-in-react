import React from 'react';
import Title from '../components/Title';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function LikePhotoApp() {
	return (
		<div className='container'>
			<Title text={'Like Photo App'} classes={'mb-3'} />
			<Title text={'likes'} classes={'subtitle'} />
		</div>
	);
}
